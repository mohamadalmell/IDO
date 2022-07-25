using System.ComponentModel.DataAnnotations;// To allow us to DataType Attributes

namespace IdoApi.Models
{
    public class Status
    {
        public int id {get; set;}

        [Required]
        public string? Name {get; set;}
    }
}