public class OpportunityLineItemhandler {

    public static void gettotalonaccount(list<OpportunityLineItem>newlist){
        set<id>opids= new set<id>();
        for(OpportunityLineItem oli : newlist){
            if(oli.OpportunityId!=null){
                opids.add(oli.OpportunityId);
            }
        }
        
        map<id,decimal>mapsum = new map<id,decimal>();
        list<aggregateResult>agr = [select opportunityId,sum(quantity)sumqty from opportunitylineItem where opportunityid in:opids group by opportunityId ];
        for(aggregateResult ar :agr){
            mapsum.put((id)ar.get('opportunityId'),(decimal)ar.get('sumqty'));
            
        }
        system.debug('mapsum'+mapsum);
        
        list<opportunity>opplist = [select id , accountid from opportunity where id in:mapsum.keyset()];
        
        map<id,id>opac= new map<id,id>();
        for(opportunity opp:opplist){
            opac.put(opp.AccountId,opp.id);
            
        }
        list<Account>accl=new list<account>();
        for(id i:opac.keyset()){
            if(mapsum.containskey(opac.get(i))){
                account acc = new account();
                 acc.id=i;
                acc.Description='qty----> '+mapsum.get(opac.get(i));
                accl.add(acc);
            }
        }
        system.debug(accl);
        
        if(!accl.isEmpty()){
            update accl;
        }
        
        
    }
}