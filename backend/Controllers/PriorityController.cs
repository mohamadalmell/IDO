using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IdoApi.Models;

namespace IDO.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PriorityController : ControllerBase
    {
        private readonly IdoContext _context;

        public PriorityController(IdoContext context)
        {
            _context = context;
        }

        // GET: api/Priority
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Priority>>> GetPriorities()
        {
          if (_context.Priorities == null)
          {
              return NotFound();
          }
            return await _context.Priorities.ToListAsync();
        }

        // GET: api/Priority/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Priority>> GetPriority(int id)
        {
          if (_context.Priorities == null)
          {
              return NotFound();
          }
            var priority = await _context.Priorities.FindAsync(id);

            if (priority == null)
            {
                return NotFound();
            }

            return priority;
        }

        // PUT: api/Priority/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<ActionResult<Priority>> PutPriority(int id,[FromForm] Priority priority) //FormForm is to accept FormData Objects
        {
            if (id != priority.id)
            {
                return BadRequest();
            }
            
            _context.Entry(priority).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PriorityExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return priority;
        }

        // POST: api/Priority
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Priority>> PostPriority([FromForm]Priority priority) //FormForm is to accept FormData Objects
        {
          if (_context.Priorities == null)
          {
              return Problem("Entity set 'IdoContext.Priorities'  is null.");
          }
            _context.Priorities.Add(priority);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPriority", new { id = priority.id }, priority);
        }

        // DELETE: api/Priority/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePriority(int id)
        {
            if (_context.Priorities == null)
            {
                return NotFound();
            }
            var priority = await _context.Priorities.FindAsync(id);
            if (priority == null)
            {
                return NotFound();
            }

            _context.Priorities.Remove(priority);
            await _context.SaveChangesAsync();

            return Content("Priority with ID of " +id+ " has been Deleted Successfully");
        }

        private bool PriorityExists(int id)
        {
            return (_context.Priorities?.Any(e => e.id == id)).GetValueOrDefault();
        }
    }
}
