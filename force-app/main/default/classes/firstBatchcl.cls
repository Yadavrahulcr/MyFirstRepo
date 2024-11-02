// creat a batch job to update all the account by assigning 
// the values as asigned below , by dividing the records in small 
// batches of '3';
Global with sharing class firstBatchcl implements database.Batchable<sobject> {
      Global database.querylocator start(database.BatchableContext bcontext) {
        string accountQuery = 'select id, name, rating , industry, annualrevenue from account';
        return database.getQueryLocator(accountQuery);
    }

    Global void execute(database.BatchableContext bcontext, list<sobject> lstacc){
          if(!lstacc.isEmpty()){
              list <account> acctoupdate = new list <account>();
            for(sobject sacc : lstacc){
                account acc = (account) sacc;
                acc.rating='warm';
                acc.industry='manufacturing';
                acc.annualrevenue=500000;  
                 acctoupdate.add(acc);
            }
            if(!acctoupdate.isEmpty()){
                update acctoupdate; 
            }
          }
    }

     Global void finish (database.BatchableContext bcontext ){
           AsyncApexjob jobdetails = [select id, status,totaljobItems,jobItemsProcessed , numberOfErrors, Createdby.Email from AsyncApexjob where id =:bcontext.getjobid() ];
     }
}