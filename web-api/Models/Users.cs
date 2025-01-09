using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace web_api.Models
{
    public sealed class Users
    {
        [Key]
        public Guid userId { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }   
        public string userName { get; set; }
        public string password { get; set; }
        public string securityQuestion { get; set; }
        public bool accountLocked { get; set; }
        public bool isAdmin { get; set; }
        public bool accountReset { get; set; }
        public string? profilePhotoUrl { get; set; }
        public Vehicle? Vehicle { get; set; }
    }
}
