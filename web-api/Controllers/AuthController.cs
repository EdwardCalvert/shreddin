using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;
using System.Security.Claims;
using web_api.Models;

namespace web_api.Controllers
{
    [Route("auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpPost,Route("auth")]
        public async Task<IActionResult> Login(string username, string password)
        {
            //if (!IsValidUsernameAndPasswod(username, password))
            //    return BadRequest();

            //var user = GetUserFromUsername(username);

            var claimsIdentity = new ClaimsIdentity(new[]
            {
                 new Claim(ClaimTypes.Name, username),
                 new Claim(ClaimTypes.Role,"Admin" ),
                 new Claim(ClaimTypes.NameIdentifier, "THIS REALLY IS THIER ID")
             }, CookieAuthenticationDefaults.AuthenticationScheme);

            var authProperties = new AuthenticationProperties
            {
                //IsPersistent = true, 
            };

            var claimsPrincipal = new ClaimsPrincipal(claimsIdentity);
            await Request.HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, claimsPrincipal, authProperties);

            return NoContent();
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
