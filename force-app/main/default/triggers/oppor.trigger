trigger oppor on opportunity (before insert) {
    if(trigger.isbefore && trigger.isInsert){
        optriggerhenler.updateoppor(trigger.new);
    }

}