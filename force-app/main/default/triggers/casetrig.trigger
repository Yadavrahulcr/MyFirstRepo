trigger casetrig on Case (before  insert ) {
    set<id>accidset=new set<id>();
    for(case cs:trigger.new)
    {
        if(cs.accountId!=null){
            accidset.add(cs.AccountId);
        }
    }
    
    map<id,contact>conmap=new map<id,contact>();
    list<event>eventlist= new list<event>();
    if(!accidset.isEmpty())
    {
        for(contact con : [select id ,accountid, Is_Primary_contact__c from contact where accountId In:accidset and Is_Primary_contact__c=true limit 1 ]){
            conmap.put(con.AccountId,con);
            
        }
        system.debug('conmap'+conmap);
        
        for(case cse : trigger.new)
        {
            if(!conmap.isEmpty()&& conmap.containskey(cse.accountId) && cse.contactid==null){
                cse.ContactId=conmap.get(cse.AccountId).id;
                datetime currentDatetime =datetime.now();
                datetime startime = currentDatetime.adddays(3);
                datetime enddate = startime.addhours(3);
                event ev = new event();
                ev.Subject=cse.Subject;
                ev.whoId=cse.Id;
                ev.StartDateTime=startime;
                ev.EndDateTime=enddate;
                eventlist.add(ev);
                
            }
            else{
                cse.adderror('there is no Primary contact on selected account');
            }
        }
    }
    
    if(!eventlist.isEmpty()){
        insert eventlist;
    }
}