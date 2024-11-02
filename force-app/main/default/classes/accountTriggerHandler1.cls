public with sharing class accountTriggerHandler1{
    public static void updateRating(list<account>lstacc) {
    for(Account acc : lstacc){
        if(acc.industry != null && acc.industry == 'apparel'){
            acc.rating = 'hot';
        }
    }

 }
}