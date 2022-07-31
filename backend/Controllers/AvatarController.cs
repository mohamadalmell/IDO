using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IdoApi.Models;

namespace IDO.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AvatarController : ControllerBase
    {
        private readonly IdoContext _context;

        public AvatarController(IdoContext context)
        {
            _context = context;
        }

        // GET: api/Avatar
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Avatar>>> GetAvatars()
        {
          if (_context.Avatars == null)
          {
              return NotFound();
          }
            return await _context.Avatars.ToListAsync();
        }

        // GET: api/Avatar/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Avatar>> GetAvatar(int id)
        {
          if (_context.Avatars == null)
          {
              return NotFound();
          }
            var avatar = await _context.Avatars.FindAsync(id);

            if (avatar == null)
            {
                return NotFound();
            }

            return avatar;
        }

        // PUT: api/Avatar/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAvatar(int id, Avatar avatar)
        {
            if (id != avatar.id)
            {
                return BadRequest();
            }

            _context.Entry(avatar).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AvatarExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Avatar
        [HttpPost]
        public async Task<ActionResult<Avatar>> PostAvatar(IFormFile avatar, int id)
        {
          if (_context.Avatars == null)
          {
              return Problem("Entity set 'IdoContext.Categories'  is null.");
          }

          var admin = await _context.Admins.FirstOrDefaultAsync(x=> x.id == id);
            
           var uploadsFolderPath = @"C:\Users\Mohamad\OneDrive\Desktop\IDO\backend\wwwroot\Files\";

            //create folder if not exist
            if(!Directory.Exists(uploadsFolderPath))  Directory.CreateDirectory(uploadsFolderPath);
            var fileName = Guid.NewGuid().ToString() + Path.GetExtension(avatar.FileName);
            var filePath = Path.Combine(uploadsFolderPath, fileName);
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await avatar.CopyToAsync(stream);
            }
            
            var newAvatar = new Avatar
            {
                Path = filePath
            }; 

            admin.Avatars.Add(newAvatar);
            await _context.SaveChangesAsync();

            return Ok();
            // CreatedAtAction("GetCategory", new { id = category.id }, category);
        }

        // DELETE: api/Avatar/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAvatar(int id)
        {
            if (_context.Avatars == null)
            {
                return NotFound();
            }
            var avatar = await _context.Avatars.FindAsync(id);
            if (avatar == null)
            {
                return NotFound();
            }

            _context.Avatars.Remove(avatar);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AvatarExists(int id)
        {
            return (_context.Avatars?.Any(e => e.id == id)).GetValueOrDefault();
        }
    }
}
