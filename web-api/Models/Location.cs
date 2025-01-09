namespace web_api.Models
{
    public class Location
    {
        public Guid locationId { get; set; }
        public string name { get; set; }
        public uint zones { get; set; }
        public double lat { get; set; }
        public double lng { get; set; }
       
    }
}
