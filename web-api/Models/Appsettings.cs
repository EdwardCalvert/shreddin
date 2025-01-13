namespace web_api.Models
{
    public class Cors
    {
        public string[] AllowedOrigins { get; set; }
    }

    public class R2
    {
        public string TokenValue { get; set; }
        public string AccessKeyID { get; set; }
        public string SecretAccessKey { get; set; }
        public string Endpoint { get; set; }
        public string BucketName { get; set; }
    }
}
