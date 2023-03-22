using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DATAa;

namespace WebApplication1.Controllers
{
    public class travelerController : ApiController
    {
        igroup190_prodEntities db = new igroup190_prodEntities();
        // GET: api/traveler
        public IEnumerable<tblTravelere> Get()
        {
            List<tblTravelere> travelers = new List<tblTravelere>();
            return travelers;
        }

        // GET: api/traveler/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/traveler
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/traveler/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/traveler/5
        public void Delete(int id)
        {
        }
    }
}
