// a trigger  upon account creation if industry is not null and value as appreal then populate rating as hot 
trigger accountTrigger on account (before insert) {
    if(trigger.isbefore && trigger.isInsert){
        accountTriggerHandler1.updateRating(trigger.new);
    }

}