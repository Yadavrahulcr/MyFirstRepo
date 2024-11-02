public with sharing class acchelp {
    public static void updateindustry(list<account>lstacc,Map<Id,Account>oldmap){
        for(account acc: lstacc){
            if((oldMap==null && acc.industry == 'manufacturing')||(acc.Industry=='manufacturing'&& acc.Industry !=oldmap.get(acc.id).industry)){
                acc.rating= 'cold';
            }
        } 
    }

    }