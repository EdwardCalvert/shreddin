using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text.Json;
using System.Text.Json.Serialization;

using Microsoft.IdentityModel.Tokens;

/// <summary>
/// Reject JWT token containing blacklisted JTI. The JTI is registered into cache provider to be blacklisted,
/// f.e. during logging out.
/// Usage:
/// <example>
/// app.UseMiddleware&lt;JwtSessionMiddleware&gt;();
/// </example>
/// </summary>
public sealed class JwtSessionMiddleware
{
    private const string UserIdToken = "MyUserIdFromJwtToken";
    private readonly RequestDelegate _next;

    public JwtSessionMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        if (context.User.Identity is not ClaimsIdentity { IsAuthenticated: true } identity)
        {
            await _next(context);
            return;
        }

        int userId = identity.FindFirst(UserIdToken) is { } claim &&
                     int.TryParse(claim.Value, out int id)
            ? id
            : default;
        string sessionId = identity.FindFirst(JwtRegisteredClaimNames.Jti)?.Value ?? string.Empty;
        bool isValid = await IsValidSession(userId, sessionId);
        if (!isValid)
        {
            throw new SecurityTokenExpiredException("Invalid token specified.");
        }

        await _next(context);
    }

    private async Task<bool> IsValidSession(string userId, string sessionId)
    {
        if (string.IsNullOrWhiteSpace(sessionId) || userId == default)
        {
            return false;
        }

        var sessions = await GetBlacklistedSessions(userId);
        bool isBlackListed = sessions.Any(t => t.SessionId == sessionId);
        return !isBlackListed;
    }
}