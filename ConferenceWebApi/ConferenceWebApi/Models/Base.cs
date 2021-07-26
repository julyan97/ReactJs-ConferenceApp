using System.ComponentModel.DataAnnotations;

namespace ConferenceWebApi.Models
{
    public class Base<T>
    {
        [Key]
        public T Id { get; set; }
    }
}