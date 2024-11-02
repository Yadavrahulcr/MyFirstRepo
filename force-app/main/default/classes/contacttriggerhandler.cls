public class contacttriggerhandler 
{
    public static void handleafterInsert(list<contact>newlist)
    {  map<id,string> conmap=new map <id,string>();
       set<id>idset=new set<id>();
      string n='';
      for(contact con : newlist)
      {
          if(con.accountid!=null)
          {
             
            
          }
           conmap.put(con.accountid,n);
      }
        list<account> aclist= new list <account>();
     for (account acc : [select id,description from account where id in:conmap.keyset() ])
     {
        acc.Description=conmap.get(acc.id); 
         aclist.add(acc);
     }
     
     update aclist;  
    } 
}