using ConferenceWebApi.Data;
using ConferenceWebApi.Models;
using ConferenceWebApi.Models.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        
        [Route("all")]
        [HttpGet]
        public ActionResult<List<Conference>> Conferences()
        {
            return db.Conferences.ToList();
        }

        
        [Route("getById")]
        [HttpGet]
        public ActionResult<List<Conference>> Conferences(string id)
        {
            return db
                .Conferences
                .Where(x=>x.Id == int.Parse(id))
                .ToList();
        }

        [Route("getByEmail")]
        [HttpGet]
        public ActionResult<List<Conference>> GetByEmail(string email)
        {
            var user = db
                .Users
                .Include(x=>x.Conferences)
                .FirstOrDefault(x => x.Email == email);

            var list = user
                .Conferences
                .ToList();
            return list;
        }

        [Route("add")]
        [HttpPost]
        public IActionResult Post(Conference conference)
        {
            db.Conferences.Add(conference);
            db.SaveChanges();
            return Ok(new { messege = "Created Successfully" });
        }

        [Route("addByEmail")]
        [HttpPost]
        public IActionResult Post(ConferenceDto conference)
        {
            var con = new Conference() { Date = conference.Date, Name = conference.Name, Time = conference.Time };
            db.Users
                .FirstOrDefault(x=>x.Email == conference.Email)
                .Conferences
                .Add(con);

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
