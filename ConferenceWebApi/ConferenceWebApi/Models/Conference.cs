using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConferenceWebApi.Models
{
    public class Conference : Base<int>
    {
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string Time { get; set; }
    }
}
