using MongoDB.Bson;
using MongoDB.Driver;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using WebSPA.QuickStart.Models;

namespace WebSPA.QuickStart.Controllers
{
    public class CustomerController : ApiController
    {
        public MongoDbContext Context = new MongoDbContext();

        [HttpPost]
        public IHttpActionResult Submit([FromBody]JToken body)
        {
            // TODO: parse the body object
            var c = body.ToObject<Customer>();

            c.Firstname = "Firstname";
            c.Lastname = "Lastname";
            c.Age = 10;
            c.Favfood = "Favfood";
            Context.Customers.InsertOneAsync(c);
            return Ok();
        }
    }
}