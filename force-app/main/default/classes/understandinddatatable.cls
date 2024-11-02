public with sharing class understandinddatatable {
    @AuraEnabled(cacheable=true)
    public static list<account> getaccdetails(){
        return [select id ,name,industry from account limit 5];
    }
    
    @AuraEnabled(cacheable=true)
    public static list<account> refresh(){
        return [select id ,name,industry from account limit 5];
    }
    @AuraEnabled(cacheable=true)
    public static list<contact> contcontdetails(){
        return [select id,accountid,lastName,phone from contact limit 10];
    }
}