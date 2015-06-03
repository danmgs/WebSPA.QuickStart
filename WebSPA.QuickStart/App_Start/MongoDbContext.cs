using MongoDB.Bson;
using MongoDB.Driver;
using WebSPA.QuickStart.Models;
using System.Linq;

namespace WebSPA.QuickStart
{
	public class MongoDbContext
	{
        public MongoDatabase Database { get; private set; }

        public MongoDbContext()
        {
            var client = new MongoClient(AppSettings.DbConnectionString);
            var server = client.GetServer();
            Database = server.GetDatabase(AppSettings.MongoDbDatabaseName) as MongoDatabase;
        }

        public MongoCollection<Car> Cars
        {
            get
            {
                return Database.GetCollection<Car>("cars");
            }
        }
	}
}







