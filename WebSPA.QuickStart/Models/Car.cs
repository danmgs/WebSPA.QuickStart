using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebSPA.QuickStart.Models
{
    public class Car
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string Color { get; set; }
        public double MaxSpeed { get; set; }
        public int Year { get; set; }
        public string OriginCountry { get; set; }
    }
}