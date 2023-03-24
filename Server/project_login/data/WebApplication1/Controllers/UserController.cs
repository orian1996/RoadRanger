using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data.Entity.Validation;
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

        [HttpPost]
        [Route("api/post/SignUp")]
        public IHttpActionResult PostSignUp([FromBody] tblUser value)
        {
            tblUser newuser = new tblUser();
            newuser.firstName = value.firstName;
            newuser.lastName = value.lastName;
            newuser.password = value.password;
            newuser.email = value.email;
            newuser.phone = value.phone;

            try
            {
                if (newuser != null)
                {
                    db.tblUsers.Add(newuser);
                    db.SaveChanges();
                    return Ok("saved!");

                    //return Created(new Uri(Request.RequestUri.AbsoluteUri),value);
                }
                return Ok("saved!");

            }

            //במידה ויש שגיאת ולידציה מראה היכן השגיאה
            catch (DbEntityValidationException ex)
            {
                var errorMessages = ex.EntityValidationErrors
                        .SelectMany(x => x.ValidationErrors)
                        .Select(x => x.ErrorMessage);

                var fullErrorMessage = string.Join("; ", errorMessages);

                var exceptionMessage = string.Concat(ex.Message, " The validation errors are: ", fullErrorMessage);

                return BadRequest(exceptionMessage);
            }
        }



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
