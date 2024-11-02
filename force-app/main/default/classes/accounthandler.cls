public class accounthandler {

    public static void handleBeforedelete(list<account>newlist){
        set<id>accids= new set<id>();
        for(account acc:newlist){
            accids.add(acc.id);
        }
           map<id,integer>mp = new map<id,integer>();
        for(account acc: [select id,(select id from contacts) from account where id In :accids]){
              mp.put(acc.id,acc.contacts.size());
            
            }
        
        for(account ac :newlist){
            if((mp.containskey(ac.id))&&(mp.get(ac.id)>0)){
                
                ac.addError('this is an error ');
            }
        }
        
        
        }
    }