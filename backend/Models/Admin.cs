using System.ComponentModel.DataAnnotations; // To allow us to DataType Attributes

namespace IdoApi.Models
{
    public class Admin
    {
        public int id {get; set;}
        public string? Name {get; set;}

        [DataType(DataType.EmailAddress)] // specifies the type of the data (Email)
        public  string? Email {get; set;}

        [DataType(DataType.Password)] // specifies the type of the data (Password)
        public  string? Password {get; set;}

        [DataType(DataType.Upload)] // specifies the type of the data (File)
        public  string? Avatar {get; set;}
    }
}