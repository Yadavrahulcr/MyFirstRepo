global class accountQueueable implements system.queueable 
{
    global void execute(system.queueablecontext qcontext){
        // write the logic to insert the account record ....
        account acc = new account ();
        acc.name = 'daarling yaadav';
        
        insert acc;
        if(acc!=null){
            system.debug('account id is '+ acc.id);
            // now lets envoke contact contactqueable class to create the 
            // relaed contact record ;
            // 
             id contactjobId = system.enqueueJob(new contactsQueueable(acc));	
          }
    }

}