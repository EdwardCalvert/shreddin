namespace web_api.DTOs
{
    public class BasicAccountInfoDto
    {
        public string? imageUrl { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public List<string> roles { get; set; }

    }
}
