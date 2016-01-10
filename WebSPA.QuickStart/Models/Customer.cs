using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebSPA.QuickStart.Models
{
    public class Customer
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public int Age { get; set; }
        public string Favfood { get; set; }
    }
}