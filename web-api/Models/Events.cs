using System.ComponentModel.DataAnnotations;

namespace web_api.Models
{
    public class Events
    {
        [Required, Key]
        public Guid Id { get; set; }

        [Required,MaxLength(100)]
        public string Name { get; set; }
        [MaxLength(1000)]
        public string Description { get; set; }
        [Required]
        public DateTime MeetTime { get; set; }
        [Required]
        public Location MeetLocation { get; set; }
        public Location ParkLocation { get; set; }
        public int EventStatus { get; set; }
        //Could be an event, a 
        //Could be a non-cancellable event. 
        //Need to consider if attendance is recorded. 
        public string? ImageUrl { get; set; }


    }
}
