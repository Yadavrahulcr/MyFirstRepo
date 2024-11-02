/*In a sales organization, managing relationships between opportunities and contacts is vital for successful deal closure.
The Opportunity Contact Role object in Salesforce allows linking contacts to opportunities
and specifying their roles in the sales process.
Ensuring accurate and efficient management of these roles is crucial for effective sales operations.


Preventing Role Assignment on Closed Opportunities: 
Users should not be allowed to assign contact roles to opportunities that are already closed, as it’s unnecessary and could lead to data inconsistency.
Avoiding Duplicate Contact Roles: 
Duplicate contact roles on the same opportunity should be prevented to maintain data integrity and avoid confusion.*/





trigger validateoppcontRole on OpportunityContactRole (before insert) {
    set<id>idset=new set<id>();
    for(OpportunityContactRole opcr:trigger.new)
    {
        idset.add(opcr.OpportunityId);
    }
    
    set<id>idsettoupdate= new set<id>();
 //   map<id,id>mapofocrNconid
    map<id,id>mapconrolidNoppid = new map<id,id>();
    list<OpportunityContactRole>opclo=[select id, contactid,opportunity.StageName, opportunityId from OpportunityContactRole where opportunityid in:idset];
    for(OpportunityContactRole cr  :opclo){
        if( cr.opportunity.StageName=='closed won' &&  idset.contains(cr.opportunityId)){
            idsettoupdate.add(cr.opportunityId);
            
        }
        else if(cr.opportunity.StageName!='closed won' && idset.contains(cr.OpportunityId)){
            mapconrolidNoppid.put(cr.opportunityId,cr.ContactId);
        }
    }
    
    
    for(OpportunityContactRole ocr :trigger.new ){
        if(idsettoupdate.contains(ocr.opportunityId)){
            ocr.addError('cant add contact to closedopp');
        }
        else if (mapconrolidNoppid.containskey(ocr.OpportunityId)&& ocr.contactId==mapconrolidNoppid.get(ocr.OpportunityId)){
            ocr.addError('conid cant be duplicate');
        }
    }
}