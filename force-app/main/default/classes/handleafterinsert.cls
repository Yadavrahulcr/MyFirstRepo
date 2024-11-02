public class handleafterinsert {
    public static void insertedafter(list<account>acclist , map<id,account>mapacc){
        list<contact>contacttoupdate= new list<contact>();
         list<contact>contactTodelete= new list<contact>();
        set<id>idset = new set<id>();
        set<id>idset1 = new set<id>();
        for(account acc : acclist){
            if(mapacc==null){
                idset.add(acc.id);
                
            }
            else if (mapacc!=null && (mapacc.get(acc.id).industry != acc.Industry)){
                idset1.add(acc.id);
            }
             
        }
        system.debug(idset);
        system.debug(idset1);
        if(idset!=null){
        for(id i : idset){
            system.debug(i);
            
            contact con = new contact ();
            con.AccountId=i;
            con.LastName='conjdksf';
            system.debug(con);
            contacttoupdate.add(con);
            system.debug(contacttoupdate);
            //insert con;
        }
        }
        system.debug(contacttoupdate);
        
        
        if(!contacttoupdate.isEmpty()){
            insert contacttoupdate;
       }
        if(idset1!=null){
        for(contact cont : [select id from contact where accountId in:idset1]){
            contactTodelete.add(cont);
            
        }
            }
        
        if(!contactTodelete.isEmpty()){
            
            delete contactTodelete;
        }
        
    }
}