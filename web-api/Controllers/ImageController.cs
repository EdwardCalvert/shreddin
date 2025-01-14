using Amazon.S3.Model;
using Amazon.S3;
using Amazon;
using Microsoft.AspNetCore.Mvc;
using Amazon.Runtime;
using web_api.Models;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace web_api.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        private readonly R2 _config;
        private static IAmazonS3 s3Client;
        private readonly ILogger<ImageController> _logger;
        public ImageController(IOptions<R2> config, ILogger<ImageController> logger) { 
            _config = config.Value;
            _logger = logger;

            var credentials = new BasicAWSCredentials(_config.AccessKeyID, _config.SecretAccessKey);
            s3Client = new AmazonS3Client(credentials, new AmazonS3Config
            {
                ServiceURL = _config.Endpoint,
            });
            AWSConfigsS3.UseSignatureVersion4 = true;
        }


        // GET: api/<ImageController>
        [HttpGet("profile-photo")]
        public async Task<IActionResult> ProfilePhoto()
        {
            try
            {
                var presign = new GetPreSignedUrlRequest
                {
                    BucketName = "shreddin",
                    Verb = HttpVerb.PUT,
                    Expires = DateTime.Now.AddDays(7),
                    Key = $"profile-photo/{Guid.NewGuid()}" 
                };
                string presignedUrl = await s3Client.GetPreSignedURLAsync(presign);
                return Ok(new { url = presignedUrl });
            }
            catch (Exception ex)
            {
                _logger.LogError("Error while generating a presigned URL {Exception}",ex);
                return BadRequest(new {frontendHint = "The address to upload the image to could not be generated"});
            }
        }
    }
}
