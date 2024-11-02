public class contactTrigHandler {
    public static void getcount(list<contact>newlist){
          set<id>idset = new set<id>();
        for(contact con:newlist){
            if(con.AccountId!=null){
                idset.add(con.AccountId);
            }
            
            
        }
        
        list<contact>conlist = [select id , accountid from contact where accountid in : idset];
        
        map<id,integer>mpconunt = new map<id,integer>();
        
        for(contact con: conlist ){
            if(!mpconunt.containskey(con.accountid)){
                mpconunt.put(con.accountid,1);
            }
            else{
                mpconunt.put(con.AccountId,mpconunt.get(con.AccountId)+1);
                
            }
        }
        
        list<account>acclist = new list<account>();
        for(id i:mpconunt.keyset()){
            account acc = new account ();
            acc.id=i;
            acc.Description= 'concount is  -  '+ mpconunt.get(i);
            acclist.add(acc);
        }
        
        if(!acclist.isEmpty()){
            update acclist;
        }
    
        
    
}
    
    public static void updatePhone(list<contact>newlist){
        set<id>accountids = new set<id>();
        for(contact con: newlist){
            if(con.AccountId!=null){
                accountids.add(con.AccountId);
            }
            
        
        }
        map<id,string>phmp = new map<id,string>();
        for(account acc: [select id,phone from account where id in : accountids]){
            if(acc.phone!=null){
                phmp.put(acc.id,acc.Phone);
            }
            
        }
        
        for(contact con:newlist){
            if(phmp.containskey(con.AccountId)){
                con.Phone=phmp.get(con.AccountId);
            }
           
        }
        
    }
}