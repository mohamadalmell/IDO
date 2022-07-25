using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace IdoApi.Models
{
    public class IdoContext : DbContext //database context is the main class that coordinates EF functionality for a data model
    {
        public IdoContext(DbContextOptions<IdoContext> options)
            : base(options)
        {
        }

        public DbSet<Admin> Admins { get; set; } = null!;
        public DbSet<Category> Categories { get; set; } = null!;
        public DbSet<Item> Items { get; set; } = null!;
        public DbSet<Priority> Priorities { get; set; } = null!;
        public DbSet<Status> Statuses { get; set; } = null!;
    }
}