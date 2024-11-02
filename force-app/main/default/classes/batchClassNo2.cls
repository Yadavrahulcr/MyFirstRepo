Global with sharing class batchClassNo2 implements database.Batchable<sobject>,database.stateful
{
    Global decimal totalRevanue = 0.0;
    Global database.querylocator start(database.BatchableContext bcontext)
        {
           string accountquery = 'select id,name, annualrevenue from account where annualRevenue!= null';
            return database.getQueryLocator(accountquery);
        }
    Global void execute(database.BatchableContext bcontext,list<sobject> accountstoinclude)
       { if(!accountstoinclude.isEmpty()){
               
              for(sobject sobj :accountstoinclude){
                account acc = (account)sobj;
                   totalRevanue+=acc.annualrevenue;
                   

              }
            }
        }
    Global void finish(database.BatchableContext bcontext)
        {
           System.debug('batch job id is '+ bcontext.getjobId());
           AsyncApexjob jobdetails = [select id, status ,totaljobItems,jobItemsProcessed,numberOfErrors from asyncApexjob where id =:bcontext.getjobId()];        
        }    
}