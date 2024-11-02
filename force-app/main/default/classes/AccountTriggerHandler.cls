Public with sharing class AccountTriggerHandler {
    Public Static List<Account> accToUpdate = new List<Account>();
    Public Static Set<Id> acctIdSet = new set<id>();
   
    public static void doTask1(List<Contact> newLstContact){
        
        for(Contact con : newLstContact){
            if(con.AccountId !=null){
                acctIdSet.add(con.AccountId);
            }
        }
        
        helper(acctIdSet);
        
    }

    public static void doTask2(List<Contact> oldLstContact){
       
        for(Contact con : oldLstContact){
            if(con.AccountId !=null){
                acctIdSet.add(con.AccountId);
            }
        }

        helper(acctIdSet);

        
    }

    public static void helper(Set<Id> acctSet){
        for(Account acc : [Select Id,No_of_Contacts__c,(Select Id from Contacts) from Account Where Id=:acctSet]){
            acc.No_of_Contacts__c = acc.Contacts.size();
            accToUpdate.add(acc);
        }

        if(accToUpdate.size()>0){
            update accToUpdate;
        }
    }
}