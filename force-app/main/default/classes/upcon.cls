public class upcon {
    public static void upcontact(list<contact>conlist,map<id,contact>conmap){
        list <account> acclist = new list<account>();
set <id> idset = new set<id>();
for(contact con: conlist ){
 if(con.name!=conmap.get(con.id).name){
     idset.add(con.account.id);
     system.debug(idset);
	 
	
 }

}
        for(account acc: [select id,Description,(select id,name from contacts ) from account where id IN :idset]){
            for(contact co  : acc.contacts){
                acc.Description= co.name;
                  acclist.add(acc);
            }

 

}
  if(!acclist.isempty()){
    update acclist;
 }
    }
    }