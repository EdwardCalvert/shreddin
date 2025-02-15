using System.Security.Claims;
using System;


namespace web_api.Auth
{
    public class AuthMethods
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
            
 
    }
}
