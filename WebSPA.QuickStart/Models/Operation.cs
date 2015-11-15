using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebSPA.QuickStart.Models
{
    public class Operation
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string Label { get; set; }
        public double Amount { get; set; }
        public DateTime Date { get; set; }
        public int Type { get; set; }
    }
}