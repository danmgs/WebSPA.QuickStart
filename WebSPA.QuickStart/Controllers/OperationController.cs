using MongoDB.Driver.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebSPA.QuickStart.Common;
using WebSPA.QuickStart.Models;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Threading.Tasks;

namespace WebSPA.QuickStart.Controllers
{
    public class OperationController : ApiController
    {
        public MongoDbContext Context { get; set; }

        public RandomGenerator RdnGenerator { get; set; }

        public OperationController()
        {
            Context = new MongoDbContext();
            RdnGenerator = new RandomGenerator(0, 1000);
        }

        [HttpGet]
        public void DeleteAll()
        {
            Context.Operations.DeleteManyAsync(new BsonDocument());
        }

        [HttpGet]
        public Task<List<Operation>> GetAll(int typeOperation)
        {
            var filter = (typeOperation != 0 && typeOperation != 1) ? Builders<Operation>.Filter.Empty : Builders<Operation>.Filter.Eq("Type", typeOperation);
            return Context.Operations.Find<Operation>(filter).ToListAsync();
        }

        [HttpGet]
        public Task<List<Operation>> GenerateRandomData(int count)
        {
            for (var i = 1; i <= count; i++)
            {
                var rdnTypeOperation = RdnGenerator.GenerateTypeOperation();
                var rdnAmount = RdnGenerator.GenerateAmount();
                
                Context.Operations.InsertOneAsync(new Operation() {
                    Label = RdnGenerator.GenerateLabel(rdnTypeOperation, rdnAmount),
                    Amount = rdnAmount,
                    Date = RdnGenerator.GenerateDate(),
                    Type = rdnTypeOperation });
            }

            return GetAll((int)TypeOperation.All);
        }

        //[HttpGet]
        //public Task<List<BsonDocument>> GetAggregatedOperations(int typeOperation)
        //{
        //    //var aggregate = Context.Operations.Aggregate<Operation>()
        //    //                .Group(new BsonDocument { { "Type", "$Type" }, { "Date", "$Date" }, { "Amount", new BsonDocument("$sum", "$Amount") } });
        //    //var results = aggregate.ToListAsync<BsonDocument>();
        //    //return results;

        //    var group = new BsonDocument 
        //        { 
        //            { "$group", 
        //                new BsonDocument 
        //                    { 
        //                        { "Type", new BsonDocument 
        //                                     { 
        //                                         { 
        //                                             "Type","$Type"
        //                                         } 
        //                                     } 
        //                        }, 
        //                        { 
        //                            "Amount", new BsonDocument 
        //                                         { 
        //                                             { 
        //                                                 "$sum", 1 
        //                                             } 
        //                                         } 
        //                        } 
        //                    } 
        //          } 
        //        };

        //    var pipeline = new[] { group };
        //    var result = Context.Operations.Aggregate<Operation>(pipeline);

        //    var matchingExamples = result.ResultDocuments
        //        .Select(x => x.ToDynamic())
        //        .ToList();

        //    foreach (var example in matchingExamples)
        //    {
        //        var message = string.Format("{0} - {1}", example._id.MyUser, example.Count);
        //        Console.WriteLine(message);
        //    }


        //}

        [HttpGet]
        public List<Operation> GetAggregatedOperations(int typeOperation)
        {
            var list = GetAll(typeOperation);
            List<Operation> aggregatedList =( from o in list.Result
              let k = new
              {
                   //try this if you need a date field 
                   //   p.SaleDate.Date.AddDays(-1 *p.SaleDate.Day - 1)
                  Date = o.Date,
                  Type = o.Type
              }
              group o by k into t
              select new Operation
              {
                  Date = t.Key.Date,
                  Type = t.Key.Type,
                  Amount = t.Sum(o => o.Amount)
              }).ToList<Operation>();

            return aggregatedList;
        }
    }
}