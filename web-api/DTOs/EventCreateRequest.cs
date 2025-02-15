using System.ComponentModel.DataAnnotations;

namespace web_api.DTOs
{
    public class EventCreateRequest
    {
        [Required]
        public string EventName { get; set; }
        [Required]
        public string Description { get; set; }
        public DateTime MeetTime { get; set; }
        public DateTime SignupTime { get; set; }

        public Guid MeetLocation { get; set; }
        public Guid ParkLocation { get; set; }
        public string? ImageUrl { get; set; }
    }
}
