using System.ComponentModel.DataAnnotations; // To allow us to DataType Attributes

namespace IdoApi.Models
{
    public class Item
    {
        public int id {get; set;}
        
        // [Required]
        public string? Title {get; set;}

        // [Required]
        [DataType(DataType.Date)] // specifies the type of the data (date)
        public DateTime? DueDate {get; set;}
        
        public string? Category { get; set; }

        // [Required]
        [DataType(DataType.Duration)] // specifies the type of the data (duration)
        public string? Estimate {get; set;}


        // One Item belongs only to one Priority but one Priority may have multiple Items
        public int? Priorityid { get; set; }
        public Priority? Priority{get; set;}

        // One Item belongs only to one Status but one Status may have multiple Items
        public int Statusid { get; set; }
        public Status? Status{get; set;}
    }
}