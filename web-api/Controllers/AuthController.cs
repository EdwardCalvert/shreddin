using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;
using System.Security.Claims;
using web_api.DataAccess;
using web_api.Models;
using web_api.DataAccess;
using System.Security.Authentication;
using Microsoft.AspNetCore.Identity;
using System.Diagnostics;

namespace web_api.Controllers
{

    public class Register
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string SecurtyQuestion { get; set; }
    }
    public class Login
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }

    [Route("api/v1/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        private readonly IPasswordHasher<User> _passwordHasher;
        public AuthController(AppDbContext context, IPasswordHasher<User> passwordHasher)
        {
            _appDbContext = context;
            _passwordHasher = passwordHasher;
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login(Login login)
        {
            if (!Models.User.IsValidUsername(login.Username))
            {
                return BadRequest(new { fronendHint = "Invalid username" });
            }
            User? user = _appDbContext.Users.Where(x => x.Username == login.Username).FirstOrDefault();
            if (default(User) == user)
            {
                return BadRequest(new { frontendHint = "Username not found" });
            }
            Debug.WriteLine(user.PasswordHash);
            var verificationResult = _passwordHasher.VerifyHashedPassword(user, user.PasswordHash, login.Password);
            Debug.WriteLine(verificationResult);
            if(verificationResult == PasswordVerificationResult.Failed)
            {
                return BadRequest(new { frontendHint=  "Password incorrect" }); 
            }

            //if (!IsValidUsernameAndPasswod(username, password))
            //    return BadRequest();

            //var user = GetUserFromUsername(username);

            var claimsIdentity = new ClaimsIdentity(new[]
            {
                 new Claim(ClaimTypes.NameIdentifier, user.Id.ToString())
             }, CookieAuthenticationDefaults.AuthenticationScheme);
            
            if (user.IsAdmin)
            {
                claimsIdentity.AddClaim(new Claim(ClaimTypes.Role, "Admin"));
            }

            var authProperties = new AuthenticationProperties
            {
                IsPersistent = true,
            };

            var claimsPrincipal = new ClaimsPrincipal(claimsIdentity);
            await Request.HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, claimsPrincipal, authProperties);

            return NoContent();
        }

        [HttpGet("valid-username")]
        public async Task<IActionResult> IsUsernameTaken(string username)
        {
            return Ok( new 
            { validUsername = Models.User.IsValidUsername(username) && _appDbContext.Users.Where(x => x.Username == username).FirstOrDefault() == default(User) 
            } );
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(Register data)
        {
            User user = new User()
            {
                Username = data.UserName,
                Firstname = data.FirstName,
                Lastname = data.LastName,
                SecurityQuestion = data.SecurtyQuestion,
                Id = Guid.NewGuid(),
            };
            user.PasswordHash = _passwordHasher.HashPassword(user,data.Password);

            _appDbContext.Users.Add(user);
            await _appDbContext.SaveChangesAsync();
            return Ok();
        }

        [HttpGet,Route("auth")]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync();
            return NoContent();
        }

        [Authorize, HttpGet,Route("de")]
        public async Task<IActionResult> TestAuth()
        {
            if (User.IsInRole("Admin"))
            {
                return Ok("You are logged in, as a User " + User.FindFirstValue(ClaimTypes.NameIdentifier));
            }
            else if (User.IsInRole("User"))
            {
                // User is a regular user
                return Ok("You are logged in, as a User");
            }
            return BadRequest("You are not signed in");
        }
    }
}
