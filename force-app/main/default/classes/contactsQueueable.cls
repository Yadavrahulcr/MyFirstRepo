global class contactsQueueable implements system.queueable
{   // create a constructur to give default value .. to the object ..
    // a constructor is always defined with public access specifier 
    // a name of the cunstructor is always same as that of the class name 
    // a constructor doest have any return type not even void
    // a constructor can have one or more parameter 
     account acc;
    public contactsQueueable(account ac){
        acc= ac;
    }
    
    global void execute(system.queueablecontext qcontext ){
        // write the logic to enter contect record..
        contact con = new contact();
        con.lastName = 'trivedi';
        con.AccountId= acc.Id;
        insert con;
        if(con!=null){
            system.debug('contact record id is ='+ con.Id);
        }
    }
}