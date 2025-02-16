using Amazon.S3.Model;
using Amazon.S3;
using Amazon;
using Microsoft.AspNetCore.Mvc;
using Amazon.Runtime;
using web_api.Models;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Authorization;
using web_api.DTOs;
using Microsoft.AspNetCore.WebUtilities;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Formats.Webp;
using SixLabors.ImageSharp.Processing;
using Amazon.S3.Transfer;
using web_api.DataAccess;
using System.Security.Claims;
using web_api.Auth;
using ImageMagick;


namespace web_api.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        private readonly R2 _config;
        private static IAmazonS3 s3Client;
        private readonly ILogger<ImageController> _logger;
        private readonly AppDbContext _appDbContext;
        public ImageController(IOptions<R2> config, ILogger<ImageController> logger, AppDbContext context) {
            _config = config.Value;
            _logger = logger;
            _appDbContext = context;

            var credentials = new BasicAWSCredentials(_config.AccessKeyID, _config.SecretAccessKey);
            s3Client = new AmazonS3Client(credentials, new AmazonS3Config
            {
                ServiceURL = _config.Endpoint,
            });
            AWSConfigsS3.UseSignatureVersion4 = true;
        }


        //[HttpPost("event-image")]
        //public async Task<ActionResult<PresignedUrlResponse>> Event(IFormFile file) {
        //    return await ProcessAndUploadImage(file, "event-image");
        //}

        [HttpPost("profile-photo")]
        public async Task<ActionResult<PresignedUrlResponse>> ProfilePhoto(IFormFile file)
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest("No file attached");
            }
            var allowedTypes = new[] { "image/jpeg", "image/png", "image/webp", "image/heic", "image/heif" };
            if (!allowedTypes.Contains(file.ContentType))
                return BadRequest("Invalid file type. Allowed types: JPEG, PNG, WEBP, HEIC.");
            string? photoUrl = await ProcessAndUploadImage(file, "profile-photo");
            if (photoUrl == null)
            {
                return StatusCode(500, "Could not upload image to aws. ");
            }
            Models.User? user = _appDbContext.Users.Where(user => user.Id == AuthMethods.GetUserGuid(User)).FirstOrDefault();
            if (user == null)
            {
                return BadRequest("Could not update the user's profile picture");
            }
            else
            {
                user.ProfilePhotoUrl = photoUrl;
                _appDbContext.Users.Update(user);
                await _appDbContext.SaveChangesAsync();
                return Ok(new PresignedUrlResponse(photoUrl));
            }   
        }

        private async Task<string?> ProcessAndUploadImage(IFormFile file, string folder) {
            

            using var inputStream = file.OpenReadStream();
            using var image = new MagickImage(inputStream);

            image.AutoOrient();

            uint size = Math.Min(image.Width, image.Height);

            int xOffset = (int) (image.Width - size) / 2;
            int yOffset = (int) (image.Height - size) / 2;

            image.Crop(new MagickGeometry(xOffset, yOffset, size, size));

            image.ResetPage();

            image.Resize(new MagickGeometry(512, 512) { IgnoreAspectRatio = false });

            image.Format = MagickFormat.WebP;
            image.Quality = 80;

            using var outputStream = new MemoryStream();
            await image.WriteAsync(outputStream);
            outputStream.Position = 0; 


            string fileName = $"{folder}/{Guid.NewGuid()}.webp";
            string? url = await UploadToS3(outputStream, fileName);
            if (url == null) {
                return null;
            }
            return url;
        }
        
        private async Task<string?> UploadToS3(Stream fileStream, string fileName)
        {

            var putRequest = new PutObjectRequest
            {
                BucketName = "shreddin",
                Key = fileName,
                InputStream = fileStream,
                ContentType = "image/webp",
                CannedACL = S3CannedACL.PublicRead,
                DisablePayloadSigning = true
            };

            await s3Client.PutObjectAsync(putRequest);
            return $"{_config.PublicURL}/{fileName}";
        }
    }
}
