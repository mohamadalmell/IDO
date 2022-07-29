using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations; // To allow us to DataType Attributes

namespace IdoApi.Models
{
    public class Admin
    {
        public Admin()
        {
            Avatars = new Collection<Avatar>();   
        }

        public int id {get; set;}

        [Required]
        public string Name {get; set;} = string.Empty;

        [DataType(DataType.EmailAddress)] // specifies the type of the data (Email)
        [Required]
        public string Email {get; set;} = string.Empty;

        [DataType(DataType.Password)] // specifies the type of the data (Password)
        [Required]
        public  string Password {get; set;} = string.Empty;

        public ICollection<Avatar> Avatars { get; set; }
    }
}