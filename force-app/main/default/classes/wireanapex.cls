public with sharing class wireanapex {
    // @auraEnabled(cacheable=true)
    // public static list<account> apexmethod(){
    //  return [select id,name,industry from account limit 10];

  // }
//   @auraenabled(cacheable=true)
//   public static list<contact> getcon(){
//     return [select id,lastname,phone from contact limit 5];
//   }  

        // @auraenabled(cacheable=true)
        // public static List<Account> filteredacc(string Industry){
        // return [select id,name,industry from Account where industry=:Industry limit 10];

        // }
        @auraEnabled
        public static list<account> apexmethod(string searchkey){
            string key = '%'+searchkey+'%';
             return [select id,name,industry from account where name like:key  limit 10];
        
           }

    }