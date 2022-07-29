using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IdoApi.Models;

namespace IDO.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StatusController : ControllerBase
    {
        private readonly IdoContext _context;

        public StatusController(IdoContext context)
        {
            _context = context;
        }

        // GET: api/Status
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Status>>> GetStatuses()
        {
          if (_context.Statuses == null)
          {
              return NotFound();
          }

            return await _context.Statuses.ToListAsync();
        }

        // GET: api/Statuses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Status>> GetStatus(int id)
        {
          if (_context.Statuses == null)
          {
              return NotFound();
          }
            var status = await _context.Statuses.FindAsync(id);

            if (status == null)
            {
                return NotFound();
            }

            return status;
        }

        // PUT: api/Statuses/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Status>> PutStatus(int id,[FromForm] Status status) //FormForm is to accept FormData Objects
        {
            if (id != status.id)
            {
                return BadRequest();
            }
            
            _context.Entry(status).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StatusExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return status;  
        }

        // POST: api/Statuses
        [HttpPost]
        public async Task<ActionResult<Status>> PostStatus([FromForm]Status status) //FormForm is to accept FormData Objects
        {
          if (_context.Statuses == null)
          {
              return Problem("Entity set 'IdoContext.Statuses'  is null.");
          }
        
            _context.Statuses.Add(status);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetStatus), new { id = status.id }, status);
        }

        // DELETE: api/Statuses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStatus(int id)
        {
            if (_context.Statuses == null)
            {
                return NotFound();
            }
            var status = await _context.Statuses.FindAsync(id);
            if (status == null)
            {
                return NotFound();
            }

            _context.Statuses.Remove(status);
            await _context.SaveChangesAsync();

            return Content("Status with ID of " +id+ " has been Deleted Successfully");
        }

        private bool StatusExists(int id)
        {
            return (_context.Statuses?.Any(e => e.id == id)).GetValueOrDefault();
        }
    }
}
