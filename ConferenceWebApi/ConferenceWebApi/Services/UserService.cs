using ConferenceWebApi.Data;
using ConferenceWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConferenceWebApi.Services
{
    public class UserService
    {
        private readonly ConferenceDbContext db;

        public UserService(ConferenceDbContext db)
        {
            this.db = db;
        }

        public User Create(User user)
        {
            db.Users.Add(user);
            db.SaveChanges();

            return user;
        }

        public User GetByEmail(string email)
        {
            return db.Users.FirstOrDefault(u => u.Email == email);
        }

        public User GetById(int id)
        {
            return db.Users.FirstOrDefault(u => u.Id == id);
        }
    }
}
