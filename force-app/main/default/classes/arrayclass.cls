public with sharing class arrayclass {
    @auraEnabled(cacheable=true)
 public static list<account>getacc(){
    return [select id,rating,name,phone,Industry,AnnualRevenue from account limit 25];
 }   
}