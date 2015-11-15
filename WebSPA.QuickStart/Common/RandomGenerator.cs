using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebSPA.QuickStart.Common
{
    public class RandomGenerator
    {
        private Random Rnd { get; set; }

        public int MinAmount { get; private set; }

        public int MaxAmount { get; private set; }

        public RandomGenerator(int MinAmount, int MaxAmount)
        {
            Rnd = new Random();
            this.MinAmount = MinAmount;
            this.MaxAmount = MaxAmount;
        }

        public int GenerateTypeOperation()
        {
            return Rnd.Next(0, 2);
        }

        public double GenerateAmount()
        {
            var randomNum = Rnd.Next(MinAmount, MaxAmount);
            return randomNum;
        }

        public string GenerateLabel(int typeOperation, double amount)
        {
            var stypeOperation = (typeOperation == (int)TypeOperation.Credit) ? TypeOperation.Credit.ToString() : TypeOperation.Debit.ToString();
            return string.Format("{0} {1}", stypeOperation.ToUpper(), amount.ToString());
        }

        public DateTime GenerateDate()
        {
            DateTime start = new DateTime(2010, 1, 1);
            Random gen = new Random();

            int range = (DateTime.Today - start).Days;
            return start.AddDays(gen.Next(range));
        }
    }
}