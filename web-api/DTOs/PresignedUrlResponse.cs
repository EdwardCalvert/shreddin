namespace web_api.DTOs
{
    public class PresignedUrlResponse
    {
        public PresignedUrlResponse(string url)
        {
            Url = url;
        }

        public string Url { get; set; }
    }
}
