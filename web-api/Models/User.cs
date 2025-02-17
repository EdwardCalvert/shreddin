using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using System.Text.RegularExpressions;
using System.Net.Mail;
using System.Security.Claims;

namespace web_api.Models
{
    [Index(nameof(Username), IsUnique = true)]
    public sealed class User
    {
        public static Guid? GetUserGuid(ClaimsPrincipal User)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (Guid.TryParse(userId, out var guid))
            {
                return guid;
            }
            return null;

        }
        public static class UserRoles
        {
            public static readonly string User = "2001";
            public static readonly string Committee = "1989";
        }
        [Key]
        public Guid Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        [Required, ]
        public string Username { get; set; }
        public string PasswordHash { get; set; }
        public bool AccountLocked { get; set; }

        public List<string> Roles { get; set; }
        public bool IsAdmin { get; set; }
        /// <summary>
        /// Represents the date when the account password was reset. 
        /// </summary>
        public DateTime? AccountReset { get; set; }
        public string? ProfilePhotoUrl { get; set; }
        public Vehicle? Vehicle { get; set; }

        public string? EmergencyContactDetails { get; set; }

        public static bool IsValidUsername(string username)
        {
            Regex rg = new Regex(@"^([a-z]|\d|\.){5,20}$");
            return rg.IsMatch(username);
        }
    }
}
