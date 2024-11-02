public with sharing class apexaccountrecord {
    @AuraEnabled
    public static list<account> accounttype( String name){
        String seacrchkey = '%'+ name +'%';
        return [SELECT Id, Name, Type, Industry FROM Account WHERE Name LIKE :seacrchkey LIMIT 20 ];

      //  public static List<Account> findAccounts(String searchKey){
         //   String key = '%' + searchKey + '%';
         //   return [SELECT Id, Name, Type, Industry FROM Account WHERE Name LIKE :key LIMIT 5];


    }

    
}