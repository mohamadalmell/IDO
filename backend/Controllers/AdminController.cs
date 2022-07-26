using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IdoApi.Models;

namespace IDO.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IdoContext _context;

        public AdminController(IdoContext context)
        {
            _context = context;
        }

        // GET: api/Admin
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Admin>>> GetAdmins()
        {
          if (_context.Admins == null)
          {
              return NotFound();
          }

          var admins = _context.Admins
              .Include(i => i.Avatars)
              .ToList();

            return await _context.Admins.ToListAsync();
        }

        // GET: api/Admin/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Admin>> GetAdmin(int id)
        {
          if (_context.Admins == null)
          {
              return NotFound();
          }
            var admin = _context.Admins
                .Include(i => i.Avatars)
                .FirstOrDefaultAsync(i => i.id == id);

            if (admin == null)
            {
                return NotFound();
            }

            return Ok(new {data = admin});
        }

        // PUT: api/Admin/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Admin>> PutAdmin(int id,[FromForm] Admin admin) //FormForm is to accept FormData Objects
        {
            if (id != admin.id)
            {
                return BadRequest();
            }

            _context.Entry(admin).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AdminExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return admin;
        }

        // POST: api/Admin
        [HttpPost]
        public async Task<ActionResult<Admin>> PostAdmin([FromForm]Admin admin) //FormForm is to accept FormData Objects
        {
          if (_context.Admins == null)
          {
              return Problem("Entity set 'IdoContext.Admins'  is null.");
          }

            _context.Admins.Add(admin);
            await _context.SaveChangesAsync();
            
            return CreatedAtAction(nameof(GetAdmin), new { id = admin.id }, admin);
        }

        // DELETE: api/Admin/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAdmin(int id)
        {
            if (_context.Admins == null)
            {
                return NotFound();
            }
            var admin = await _context.Admins.FindAsync(id);
            if (admin == null)
            {
                return NotFound();
            }

            _context.Admins.Remove(admin);
            await _context.SaveChangesAsync();

            return Content("Admin with ID of " +id+ " has been Deleted Successfully");
        }

        private bool AdminExists(int id)
        {
            return (_context.Admins?.Any(e => e.id == id)).GetValueOrDefault();
        }
    }
}