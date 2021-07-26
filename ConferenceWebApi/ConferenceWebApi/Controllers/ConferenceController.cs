using ConferenceWebApi.Data;
using ConferenceWebApi.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ConferenceWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConferenceController : ControllerBase
    {
        private readonly ConferenceDbContext db;

        public ConferenceController(ConferenceDbContext db)
        {
            this.db = db;
        }

        [HttpGet]
        public ActionResult<List<Conference>> Conferences()
        {
            return db.Conferences.ToList();
        }

        [Route("add")]
        [HttpPost]
        public IActionResult Post(Conference conference)
        {
            db.Conferences.Add(conference);
            db.SaveChanges();
            return Ok(new { messege = "Created Successfully" });
        }

        [Route("delete")]
        [HttpPost]
        public IActionResult Delete(Conference conference)
        {
            var conferenceToDelete = db.Conferences.FirstOrDefault(x => x.Id == conference.Id);

            db.Conferences.Remove(conferenceToDelete);
            db.SaveChanges();
            return Ok(new { messege = "Deleted Successfully" });
        }
    }
}
