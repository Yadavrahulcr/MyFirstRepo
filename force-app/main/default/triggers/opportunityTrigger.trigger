trigger opportunityTrigger on opportunity(after insert,after update ,after delete){
    
    if(trigger.isAfter&&(trigger.isupdate || trigger.isinsert)){
    opportunityHandler.gettotalamount(trigger.new);
        }
}