/*Create a field on Account Named (Client Contact lookup to Contact).
Once an Account is inserted a Contact will create with the name of the Account and that Contact will be the Client Contact on the Account.*/
public class accounttriggerhanler {
   
    
    public static void handleafterupdate (list<account>newlist){
        map<id,string>idmap=new map<id,string>();
        map<id,id>idacc=new map<id,id>();
        list<account>acclist=new list<account>();
        list<contact>contTobeInserted=new list<contact>();
        for(account acc:newlist){
            if(acc.Name!=null){
                idmap.put(acc.id,acc.Name);
            }
        }
       
        for(id i :idmap.keyset()){
          
          contTobeInserted.add(new contact(accountId=i,lastName=idmap.get(i)));
        }
        
        if(!contTobeInserted.isEmpty()){
            insert contTobeInserted;
        }
        
        Map<id,id>accCon= new map<id,id>();
       list<contact>conlist=[select accountid, id from contact where accountId In:idmap.keyset()]; 
        
        for(contact conn : conlist){
            if(conn.AccountId!=null){
                accCon.put(conn.AccountId,conn.id);
            }
        }
        
        list<account>acctoupdate=new list <account>();
        for(id ii: accCon.keyset()){
           acctoupdate.add(new account(id=ii,clinent_contact__c=accCon.get(ii)));
        }
        if(!accToupdate.IsEmpty()){
            update acctoupdate;
        }
        
    }
}