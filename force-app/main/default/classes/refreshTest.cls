public with sharing  class refreshTest {
       @AuraEnabled(cacheable=true)
       public static list<account> refreshtestmethod (){

        return [select id,name,phone from account limit 5 ];


       }
}