using ConferenceWebApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConferenceWebApi.Data
{
    public class ConferenceDbContext : DbContext
    {
        public DbSet<Conference> Conferences { get; set; }
        public DbSet<User> Users { get; set; }

        public ConferenceDbContext(DbContextOptions<ConferenceDbContext> options) : base(options)
        {

        }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        var link = new Conference() { Id = 1, Name = "test1", Date = DateTime.Now.Date, Time = DateTime.Now.TimeOfDay.ToString() };
        modelBuilder.Entity<Conference>().HasData(
           link,
            new Conference() { Id = 2, Name = "test2", Date = DateTime.Now.Date, Time = DateTime.Now.TimeOfDay.ToString() },
            new Conference() { Id = 3, Name = "test3", Date = DateTime.Now.Date, Time = DateTime.Now.TimeOfDay.ToString() },
            new Conference() { Id = 4, Name = "test3", Date = DateTime.Now.Date, Time = DateTime.Now.TimeOfDay.ToString() }
            );
        modelBuilder.Entity<User>().HasData(
            new User() { Email = "july123@abv.bg", Name = "joe", Id = 1, Password = "123" }
);

        modelBuilder.Entity<User>()
            .HasMany(x => x.Conferences)
            .WithOne();

        base.OnModelCreating(modelBuilder);
    }
}
}
