using MongoDB.Bson;
using MongoDB.Driver;
using WebSPA.QuickStart.Models;
using System.Linq;

namespace WebSPA.QuickStart
{
	public class MongoDbContext
	{
        public IMongoDatabase Database { get; private set; }

        public MongoDbContext()
        {
            var client = new MongoClient(AppSettings.DbConnectionString);
            Database = client.GetDatabase(AppSettings.MongoDbDatabaseName);
        }

        public IMongoCollection<Car> Cars
        {
            get
            {
                return Database.GetCollection<Car>("cars");
            }
        }

        public IMongoCollection<Operation> Operations
        {
            get
            {
                return Database.GetCollection<Operation>("operation");
            }
        }

        public IMongoCollection<Customer> Customers
        {
            get
            {
                return Database.GetCollection<Customer>("customers");
            }
        }
	}
}







