public class connectparentaccount {
    public static void parentconect(){
        list<contact>conlist= new list<contact>();
        list<account>lstaccc = [select id from account limit 5];
        
        for(integer i =0 ; i<5 ;i++){
            contact con = new contact ();
            con.LastName= 'contact'+i;
            con.AccountId=lstaccc[i].id;
              conlist.add(con);
        }
        
        if(!conlist.isEmpty()){
            insert conlist;
        }
        
        
        
       
        
    }

}