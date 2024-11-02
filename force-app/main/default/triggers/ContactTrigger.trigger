trigger ContactTrigger on Contact (after insert, after update,before insert  ) {
    
    if(trigger.isAfter &&(trigger.isinsert || trigger.isupdate)){
        contactTrigHandler.getcount(trigger.new);
        
        
    }
    
    if(trigger.isbefore && trigger.isinsert){
        contactTrigHandler.updatePhone(trigger.new);
    }
    

}