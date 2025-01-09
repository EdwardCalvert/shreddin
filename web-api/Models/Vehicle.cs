using System.ComponentModel.DataAnnotations;

namespace web_api.Models
{
    public class Vehicle
    {
        [Required,Key]
        public Guid VehicleId {  get; set; }
        public string? VehicleIconUrl { get; set; }
        [Required,Range(1,50)]
        public int SeatCount { get; set; }
        [Required, Range(1, 50)]
        public int BikeCount { get; set; }
    }
}
