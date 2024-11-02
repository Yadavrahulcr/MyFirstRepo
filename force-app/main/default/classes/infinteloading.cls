public with sharing class infinteloading {
    @AuraEnabled
    public static list<Account> somebigdataset (integer limitsize, integer offset){
        try {
                return  [select id ,name ,industry from Account limit:limitsize offset :offset ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

   
    @AuraEnabled
    public static list<Account> clintsitdepagination (){
        try {
                return  [select id ,name ,industry from Account  ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }



    @AuraEnabled
    public static list<Account> serversidepagination (Integer pageSize,String lastRecordId){
        String query='SELECT Id,Name,Type,Rating FROM Account ';
        if(String.isNotBlank(lastRecordId)){
            query+='WHERE Id >:lastRecordId ';
        }
        query+='ORDER BY Id LIMIT :pageSize';
        return Database.query(query);
    }

    @AuraEnabled(cacheable=true)
    public static Integer getTotalAccountsCount(){
        return [SELECT COUNT() FROM Account];
    }

}