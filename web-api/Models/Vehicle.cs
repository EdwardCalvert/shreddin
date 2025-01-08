using System.ComponentModel.DataAnnotations;

namespace web_api.Models
{
    public class Vehicle
    {
        [Required,Key]
        public Guid vehicleId {  get; set; }
        public string vehicleIconUrl { get; set; }
        [Required,Range(1,50)]
        public int seatCount { get; set; }
        [Required, Range(1, 50)]
        public int bikeCount { get; set; }
    }
}
