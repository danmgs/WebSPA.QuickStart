﻿using System.Configuration;

namespace WebSPA.QuickStart
{
    [System.Diagnostics.DebuggerNonUserCodeAttribute]
    [System.Runtime.CompilerServices.CompilerGeneratedAttribute]
    public static class AppSettings
    {
        public static string ClientValidationEnabled
        {
            get { return ConfigurationManager.AppSettings["ClientValidationEnabled"]; }
        }

        public static string DbConnectionString
        {
            get { return ConfigurationManager.AppSettings["DbConnectionString"]; }
        }

        public static string MongoDbDatabaseName
        {
            get { return ConfigurationManager.AppSettings["MongoDbDatabaseName"]; }
        }

        public static string PreserveLoginUrl
        {
            get { return ConfigurationManager.AppSettings["PreserveLoginUrl"]; }
        }

        public static string UnobtrusiveJavaScriptEnabled
        {
            get { return ConfigurationManager.AppSettings["UnobtrusiveJavaScriptEnabled"]; }
        }

        public static class Webpages
        {
            public static string Enabled
            {
                get { return ConfigurationManager.AppSettings["webpages:Enabled"]; }
            }

            public static string Version
            {
                get { return ConfigurationManager.AppSettings["webpages:Version"]; }
            }
        }
    }
}

