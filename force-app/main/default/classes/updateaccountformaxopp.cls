public class updateaccountformaxopp {
    public static void handleafterinsertupdatundelete(list<opportunity>newlist){
        set<id>accidset=new set<id>();
        list<opportunity>opplist=[select id , accountId from opportunity where id in :newlist];
        for(opportunity op:opplist)
        {
            if(op.accountid!=null){
                accidset.add(op.AccountId);
            }
        }
        
         map<id,decimal>mapofaccidandmaxopp = new map<id,decimal>();
         
        list<aggregateResult>results=[select accountId , max(amount)maxamount from opportunity where accountid in :accidset group by accountId];
        
        for(aggregateResult ar:results){
            
            id accountid = (id)ar.get('accountId');
            decimal maxAmount=(decimal)ar.get('maxamount');
            mapofaccidandmaxopp.put(accountid,maxAmount);
            
        }
        system.debug(mapofaccidandmaxopp);
       
        list<account> acclisttoupdate= new list<account>();
        for(account acc: [select id , max_amount_opportunity__c from account where id in:accidset]){
            
            acc.max_amount_opportunity__c= string.valueof(mapofaccidandmaxopp.get(acc.id));
            // string.valueof(number) can convert number into string
            acclisttoupdate.add(acc);
        }
        if(!acclisttoupdate.isEmpty()){
            update acclisttoupdate;
        }
            
    }

}