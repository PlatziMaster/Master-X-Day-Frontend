using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlatziMasterTrello.Model
{
    public class TrelloMembers
    {
        // Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse); 
        public class Root
        {
            public string id { get; set; }
            public string idMember { get; set; }
            public string memberType { get; set; }
            public bool unconfirmed { get; set; }
            public bool deactivated { get; set; }
        }


    }
}
