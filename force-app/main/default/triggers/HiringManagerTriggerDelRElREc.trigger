trigger HiringManagerTriggerDelRElREc on HIRING_MANAGER__c (before insert) {
    if(Trigger.IsBefore && Trigger.IsDelete)
    {
        List<POSITION__c> lstpos = [SELECT Name, HIRING_MANAGER__C FROM POSITION__C
                                   WHERE HIRING_MANAGER__C IN :TRIGGER.OLDMAP.KEYSET()];
        if(!lstpos.isempty())
        {
           
            delete lstpos;
        }
    }
}