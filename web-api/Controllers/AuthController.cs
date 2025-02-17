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
using System.Runtime.ExceptionServices;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages;
using Microsoft.EntityFrameworkCore;
using System.Net;
using Microsoft.Extensions.Configuration;
using web_api.DTOs;

namespace web_api.Controllers
{

    public class Register
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string SecurityCode { get; set; }
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
        private readonly IConfiguration _configuration;
        private readonly ILogger<AuthController> _logger;
        public AuthController(AppDbContext context, IPasswordHasher<User> passwordHasher, IConfiguration config, ILogger<AuthController> logger )
        {
            _appDbContext = context;
            _passwordHasher = passwordHasher;
            _configuration = config;
            _logger = logger;
        }
        [HttpPost("login")]
        public async Task<ActionResult<BasicAccountInfoDto>> Login(Login login)
        {
            if (!Models.User.IsValidUsername(login.Username))
            {
                return BadRequest(new { fronendHint = "Invalid username" });
            }
            User? user = await _appDbContext.Users.Where(x => x.Username == login.Username).FirstOrDefaultAsync();
            if (default(User) == user)
            {
                return BadRequest(new { frontendHint = "Username not found" });
            }
            else if(user.AccountLocked) 
            {
                return Unauthorized(new { frontendHint = "Account locked" });
            }
            var verificationResult = _passwordHasher.VerifyHashedPassword(user, user.PasswordHash, login.Password);
            if(verificationResult == PasswordVerificationResult.Failed)
            {
                return BadRequest(new { frontendHint=  "Password incorrect" }); 
            }

            var claimsIdentity = new ClaimsIdentity(new[]
            {
                 new Claim(ClaimTypes.NameIdentifier, user.Id.ToString())
             }, CookieAuthenticationDefaults.AuthenticationScheme);
            
            foreach(string i in user.Roles)
            {
               claimsIdentity.AddClaim(new Claim(ClaimTypes.Role, i));
            }
                
           

            var authProperties = new AuthenticationProperties
            {
                IsPersistent = true,
            };

            var claimsPrincipal = new ClaimsPrincipal(claimsIdentity);
            await Request.HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, claimsPrincipal, authProperties);

            return Ok(new BasicAccountInfoDto{ 
                roles = user.Roles, 
                imageUrl = user.ProfilePhotoUrl, 
                firstName = user.Firstname, 
                lastName = user.Lastname
            });
        }

        [Authorize,HttpGet("account-info")]
        public async Task<ActionResult<BasicAccountInfoDto>> GetAccountInfo()
        {
            Models.User? user = await _appDbContext.Users.Where(user => user.Id == Models.User.GetUserGuid(User)).FirstOrDefaultAsync();
            if (user == null)
            {
                return BadRequest(new { frontendHint = "User could not be found" });
            }
            else
            {
                return Ok(new BasicAccountInfoDto
                {
                    roles = user.Roles,
                    imageUrl = user.ProfilePhotoUrl,
                    firstName = user.Firstname,
                    lastName = user.Lastname
                });
            }
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(Register data)
        {
            if(data.SecurityCode != _configuration["UserRegistrationSecurityCode"])
            {
                return Unauthorized(new { frontendHint = "AUMBC Security code invalid" });
            }

            if (!Models.User.IsValidUsername(data.Username))
            {
                return BadRequest(new { fronendHint = "Invalid username" });
            }
            User? db_user = await _appDbContext.Users.Where(x => x.Username == data.Username).FirstOrDefaultAsync();
            if (db_user != default(User))
            {
                return Conflict(new { frontendHint = "Username already taken" });
            }
            User user = new User()
            {
                Username = data.Username,
                Firstname = data.Firstname,
                Lastname = data.Lastname,
                Roles = [Models.User.UserRoles.User],
                Id = Guid.NewGuid(),
            };
            user.PasswordHash = _passwordHasher.HashPassword(user,data.Password);
            try
            {
                _appDbContext.Users.Add(user);
                await _appDbContext.SaveChangesAsync();
                return NoContent();
            }
            catch(Exception ex)
            {
                _logger.LogError("Error while registering user {Exception}", ex);
                return BadRequest(new { frontendHint = "Registration failed" });
            }
        }

        [HttpGet,Route("logout")]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync();
            return NoContent();
        }

        [Authorize, HttpGet,Route("get-details")]
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
            Console.Write(User.IsInRole("2001"));
            var claims = User.Claims.Where(claim => claim.Type == ClaimTypes.Role).Select(claim => claim.Value ).ToArray();

            return Ok(new { bob=claims });
        }
    }
}
