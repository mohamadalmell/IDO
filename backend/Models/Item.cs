using System.ComponentModel.DataAnnotations; // To allow us to DataType Attributes

namespace IdoApi.Models
{
    public class Item
    {
        public int id {get; set;}
        public string? Title {get; set;}

        [DataType(DataType.Date)] // specifies the type of the data (date)
        public DateTime? DueDate {get; set;}

        [DataType(DataType.Duration)] // specifies the type of the data (duration)
        public string? Estimate {get; set;}

        // One Item belongs only to one Category but one Category may have multiple Items
        public Category? Category{get; set;}

        // One Item belongs only to one Priority but one Priority may have multiple Items
        public Priority? Priority{get; set;}

        // One Item belongs only to one Status but one Status may have multiple Items
        public Status? Status{get; set;}
    }
}