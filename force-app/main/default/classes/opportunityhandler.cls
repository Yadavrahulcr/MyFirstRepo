public class opportunityhandler {
    public static void gettotalamount(list<opportunity>newlist){
        set<id>idset = new set<id>();
        for(opportunity opp: newlist){
            if(opp.accountid != null){
                idset.add(opp.accountid);
            }
        }
        
        list<opportunity>opplist =[select id,amount,accountid from opportunity where accountid in:idset];
        
        Map<id,decimal>summap= new map<id,decimal>();
        
        for(opportunity opp: opplist){
            if(!summap.containskey(opp.AccountId)){
                summap.put(opp.AccountId,opp.Amount);
                
            }
            else{
                summap.put(opp.AccountId,summap.get(opp.AccountId)+opp.Amount);
            }
        }
        
        list<account>acclis = new list<account>();
        for(id i: summap.keyset()){
            
            account acc = new account();
            acc.id=i;
            acc.Description=''+summap.get(i);
            acclis.add(acc);
            
        }
        if(!acclis.isEmpty()){
            update acclis;
        }
        
    }
}