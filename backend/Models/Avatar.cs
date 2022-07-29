using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations; // To allow us to DataType Attributes

namespace IdoApi.Models
{
    public class Avatar
    {
        public int id {get; set;}
        
        [Required]
        [DataType(DataType.Upload)]
        public string Path { get; set; } = string.Empty;
    }
}