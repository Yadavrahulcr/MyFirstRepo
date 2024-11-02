trigger countContact on Contact (after insert, after update, after delete, after undelete) {
   
    if(trigger.isAfter && (trigger.isInsert || trigger.isUpdate || trigger.isUndelete)){
        AccountTriggerHandler.doTask1(trigger.new);
    }

    if(trigger.isAfter && (trigger.isDelete || trigger.isUpdate)){
        AccountTriggerHandler.doTask2(trigger.old);
    }
}
