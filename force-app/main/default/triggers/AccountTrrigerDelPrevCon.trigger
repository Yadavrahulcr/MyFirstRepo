trigger AccountTrrigerDelPrevCon on Account (before delete) 
{
 if(trigger.IsBefore && trigger.IsDelete)
 {
     List<Contact> lstcont = [SELECT Id,firstName,Lastname,AccountId from contact where AccountId IN : trigger.OldMap.keyset()];
      
     if(!lstcont.isempty())
       {
           for(contact coo: lstcont)
           {
               coo.accountId= null;
           }
           update lstcont;
               }
 
 }   
}