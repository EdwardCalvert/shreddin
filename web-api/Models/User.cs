using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using System.Text.RegularExpressions;

namespace web_api.Models
{
    public sealed class User
    {
        [Key]
        public Guid Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }   
        public string Username { get; set; }
        public string PasswordHash { get; set; }
        public string SecurityQuestion { get; set; }
        public bool AccountLocked { get; set; }
        public bool IsAdmin { get; set; }
        public bool AccountReset { get; set; }
        public string? ProfilePhotoUrl { get; set; }
        public Vehicle? Vehicle { get; set; }

        public static bool IsValidUsername(string username)
        {
            Regex rg = new Regex(@"^([a-z]|\d|\.){5,20}$");
            return rg.IsMatch(username);
        }
    }
}
