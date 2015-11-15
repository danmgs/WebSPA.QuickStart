using MongoDB.Bson;
using MongoDB.Driver;
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
    public class GarageController : ApiController
    {
        public MongoDbContext Context = new MongoDbContext();

        [HttpGet]
        public void DeleteAllCars()
        {
            Context.Cars.DeleteManyAsync(new BsonDocument());
        }

        [HttpGet]
        public Task<List<Car>> GetAllCars()
        {
            return Context.Cars.Find<Car>(new BsonDocument()).ToListAsync();
        }

        [HttpGet]
        public Task<List<Car>> InsertCarsData(int count)
        {
            Random rnd = new Random();            

            for(var i = 1; i <= count; i++)
            {
                var randomNum = rnd.Next();
                Context.Cars.InsertOneAsync(new Car() { MaxSpeed = randomNum, Color = (randomNum%2 == 0)?"Blue":"Red" });
            }

            return GetAllCars();
        }   
    }
}