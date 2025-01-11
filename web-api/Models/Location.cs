namespace web_api.Models
{
    public class Location
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public uint Zones { get; set; }
        public double Lat { get; set; }
        public double Lng { get; set; }
       
    }
}
