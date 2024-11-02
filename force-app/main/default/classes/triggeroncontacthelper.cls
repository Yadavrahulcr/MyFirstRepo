public class triggeroncontacthelper {
    public static void upacc(list<contact>conlist,map<id,contact>oldmap){
        set<id>idset=new set<id>();
        list <account>lstacc= new list<account>();
        for(contact con:conlist){
            if((con.FirstName!=oldmap.get(con.id).firstName)||(con.LastName!=oldmap.get(con.id).lastname)){
              idset.add(con.AccountId);
                
            }
            for(account acc : [select id,description,(select id ,firstname from contacts) from account where id IN:idset]){
                for(contact c: acc.contacts){
                    acc.Description=(acc.Description!=null?acc.Description+'\n':'')+ c.FirstName;
                   
                }
                 lstacc.add(acc);
                
            }
        }
        if(!lstacc .isempty()){
            update lstacc;
        }
            
    }
}