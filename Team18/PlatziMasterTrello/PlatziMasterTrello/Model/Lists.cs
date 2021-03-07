using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlatziMasterTrello.Model
{
    public class TrelloLists
    {
        // Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse); 

            public string id { get; set; }
            public string name { get; set; }
            public bool closed { get; set; }
            public int pos { get; set; }
            public object softLimit { get; set; }
            public string idBoard { get; set; }
            public bool subscribed { get; set; }


    }
}
