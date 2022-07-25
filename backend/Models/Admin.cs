using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations; // To allow us to DataType Attributes

namespace IdoApi.Models
{
    public class Admin
    {
        public int id {get; set;}

        [Required]
        public string? Name {get; set;}

        [DataType(DataType.EmailAddress)] // specifies the type of the data (Email)
        [Required]
        public  string Email {get; set;}

        [DataType(DataType.Password)] // specifies the type of the data (Password)
        [Required]
        public  string Password {get; set;}

        [DataType(DataType.Upload)] // specifies the type of the data (File)
        [Required]
        [NotMappedAttribute]
        public  IFormFile Avatar {get; set;}
    }
}