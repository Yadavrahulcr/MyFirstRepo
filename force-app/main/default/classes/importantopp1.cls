public class importantopp1 {
    public static void maxopp(list<opportunity>newlist, list<opportunity>oldlist,map<id,opportunity>oldmap){
        set<id> idset = new set <id>();
     //   map<string,decimal>netmap =new map<string,decimal>();
        for(opportunity opp : newlist){
            if(opp.accountid!=null &&  newlist!=null){
                idset.add(opp.accountid);
            }
        }
         list<account>accl= new list<account>();
        for(account acc : [select id, important_opp__c ,(select name ,amount from opportunities  order by  amount desc limit 1 ) from account where id in : idset ]){
            for(opportunity o : acc.opportunities ){
                 acc.IMPORTANT_OPP__c= o.Name;
                accl.add(acc);
            }
             
            }        
                  
        if(!accl.isempty()){
            update accl;
        }
                    
                
       
        }
            
    }