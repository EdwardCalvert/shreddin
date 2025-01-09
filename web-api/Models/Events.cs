using System.ComponentModel.DataAnnotations;

namespace web_api.Models
{
    public class Events
    {
        [Required]
        public Guid eventId { get; set; }

        [Required,MaxLength(100)]
        public string name { get; set; }
        [MaxLength(1000)]
        public string description { get; set; }
        [Required]
        public DateTime meetTime { get; set; }
        [Required]
        public Location meetLocation { get; set; }
        public Location parkLocation { get; set; }
        public int eventStatus { get; set; }
        //Could be an event, a 
        //Could be a non-cancellable event. 
        //Need to consider if attendance is recorded. 
        public string ImageUrl { get; set; }


    }
}
