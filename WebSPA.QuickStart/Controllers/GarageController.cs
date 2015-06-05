using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
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
            Context.Cars.RemoveAll();
        }

        [HttpGet]
        public List<Car> GetAllCars()
        {
            var result = new List<string>();
            return Context.Cars.FindAll().ToList<Car>();
        }

        [HttpGet]
        public List<Car> InsertCarsData(int count)
        {
            Random rnd = new Random();            

            for(var i = 1; i <= count; i++)
            {
                var randomNum = rnd.Next();
                Context.Cars.Save<Car>(new Car() { MaxSpeed = randomNum, Color = (randomNum%2 == 0)?"Blue":"Red" });
            }

            return GetAllCars();
        }   
    }
}