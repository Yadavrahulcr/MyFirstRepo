public class contactTriggerHandler1 {
    
    public static void handlebeforeinsert (list<contact>newlist){
         map<string,id>phonemap= new map<string,id>();
          map<string,id>emailmap= new map<string,id>();
        list<contact>conlist = [select id, phone,email from contact];
        
        for(contact con : conlist){
            phonemap.put(con.phone,con.id);
            emailmap.put(con.email,con.id);
        }
        
        for(contact con :newlist){
           
            if(phonemap.containskey(con.Phone)){
                con.addError('this contact already exists');
            }
            else if (emailmap.containskey(con.email)){
                con.addError('this email already exists');
            }
        }
        
       
        
        
    }

}