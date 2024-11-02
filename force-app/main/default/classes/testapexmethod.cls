public with sharing class testapexmethod {
    @Aruaenabled(cacheable=true)
   public static List<Account> accountdetails(string indusrty){
     string searchkey =  '%'+indusrty+'%';
    return [SELECT id,name from account where Industry like:searchkey limit 10];
   }

    
}