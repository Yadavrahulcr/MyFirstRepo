trigger acctrig on Account (after insert,after update,before delete,before insert) {
    if(trigger.isbefore && trigger.isdelete){
     accounthandler.handleBeforedelete(trigger.old);   
        
    }
    
    if(trigger.isbefore && trigger.isinsert){
        
    
}
}