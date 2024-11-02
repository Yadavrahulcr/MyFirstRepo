trigger opportunitylineItemTrigger on OpportunityLineItem (after insert,after delete, after update) {
    if(trigger.isAfter&&(trigger.isinsert|| trigger.isupdate)){
        OpportunityLineItemhandler.gettotalonaccount(trigger.new);
    }

}