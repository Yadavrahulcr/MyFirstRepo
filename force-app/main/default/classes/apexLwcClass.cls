public with sharing class apexLwcClass {
    @auraEnabled (cacheable=true)
    public static list<account> getAccountList(){
           return [select Id,Name,Type,Industry from Account Limit 10];
    }

    }