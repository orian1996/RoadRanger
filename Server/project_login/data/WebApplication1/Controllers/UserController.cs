using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DATAa;

namespace WebApplication1.Controllers
{
    public class UserController : ApiController
    {
        igroup190_prodEntities db = new igroup190_prodEntities();
        // GET: api/User
        public IEnumerable<tblUser> Get()
        {
            List<tblUser> users = db.tblUsers.ToList();

            return users;
        }

        // GET: api/User/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/User
        //public void Post([FromBody] tblUser value)
        //{
        //    db.tblUsers.Add(value);
        //    db.SaveChanges();
        //}

        [HttpPost]
        [Route("api/post/login")]
        public IHttpActionResult Post([FromBody] tblUser value)
        {
            var users = db.tblUsers.Select(x => new
            {
                email = x.email,
                password = x.password
            }).ToList();
            try
            {
                foreach (var item in users)
                {
                    if (item.email == value.email && item.password == value.password)
                    {
                        return Ok("good!");
                    }
                }
            }
            catch
            {
                return BadRequest("bad");
            }
            return BadRequest("bad");
        }

        // PUT: api/User/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/User/5
        public void Delete(int id)
        {
        }
    }
}
