using System.ComponentModel.DataAnnotations;

namespace web_api.Models
{
    public class EventReply
    {
        [Required]
        public Guid Id { get; set; }
        public DateTime EventDate { get; set; }
        public DateTime ReplyTime { get; set; }

        public Vehicle? vehicle { get; set; }
        public int status { get; set; }
        //Let 2 = canceled
        //Let 4 = Attendance confirmed
        //Let 8 = Paid
        //Let 16 = Self-report
        public int Zones { get; set; }
        public int? Goods { get; set; }
        //This is always null until the attenance report has been completed. 
        public Decimal? Total { get; set; }

    }
}
