// used case 1 - Query 5 Account records into a list . now iterate on a list and a crate a set of account Ids and display values of the set .
public class accountHelper {
    public static void ListSetIteration()
    {
         List<Account> Lstac = New List <Account>();
         Set<Id> idset = New set<Id>();
        
        Lstac = [select Id from account limit 5 ];
       
        for (account acc : lstac ){
            idset.add(acc.id);
        }
        for(id i : idset ) {
            system.debug('Account Id'+ i);
        }
        
    }
    
    //used case 2 Query 5 Acccount record into a list . now iterate on a list and creat a map where key will be id and value will be account Sobject and display value of 
    // the map 
    
    Public static void listMapIteration()
        {
      List <Account> accl = New List <Account>();
        Map<Id,Account> MaAc = New Map<Id,Account>();
        
        accl= [Select Id from Account limit 5];
        for(account acc:accl){
            MaAc.put(acc.id,Acc);
        }
        for(Id i: maAc.keyset()){
            system.debug(MaAc.get(i));
        }
            
    }  
    
   // Used case 3 Query 5 accounts records into a list . now create a map where key will be account id, and value will be account sobject (without using loop ) and display 
   // values of map
    Public static void listMapWithoutLoop(){
        List <Account> lstacc = New List<Account>();
        lstacc = [Select Id from Account limit 5];
        Map<Id,Account> mapacc = New Map<Id,Account>(lstacc);
        system.debug(mapacc);
        for(Id i : mapacc.KeySet() ){
            system.debug(mapacc.get(i));
        }
    }
    
    
    // used case 4 - Query 5 Account records into a list . Now create a set of Account ID and Map < Id , Account> using a list . 
    // Now iterate on set and cheak whether set value match with map key, if yes then display map value .
    
    Public static void SetVsMap()
    {
        List <Account> lstAcc = New List <Account>();
        lstAcc=[Select Id From Account Limit 5];
        Set<Id>AccId=New Set<Id>();
        Map<Id,account>MapAcc=New Map<Id,Account>();
        
        for(Account acc:lstAcc){
            AccID.add(acc.id);
            MapAcc.put(acc.id,acc);
        }
       for(Id i: AccID)
       {
           if(AccID.contains(i)){
               system.debug(MapAcc.get(i));
               
           }
       }
        
        
            
            
            
        
    }
    
    // Used Case -5. Query last week Created Accounts With Related Contacts and also display the account name, total related contacts and first Name of related contact
    
   Public static void accountWithRelatedContacts(){
        List<Account>LstAcc = New list<Account>();
        LstAcc=[Select id,Name,(Select id,FirstName From Contacts)From Account Where CreatedDate=Last_Week];// here contacts which is a related field has been
        //queried with in the query of account   Remember this method of querying in the future method 
        
        For(account acc : LstAcc){
            system.debug('Account name'+ acc.name);
                system.debug('total number of related contact'+ acc.contacts.size());
            for(contact con:acc.contacts)
            {
                system.debug('act First Name :'+ con.FirstName);
                    }
        } 
        
        
        
   
    }
    
    

   //Query Account (id,Name,Phone) with Related Opportunities (Name,CloseDate,Stage) Where Account Phone != null . Sort the records in both Asc or Desc
   //order based on Created Date.
   //
   //version 1, Ascending Order ;
   
    public static void accountWithRelatedOpp(){
        List<Account> lstacc = New list <Account>();
        lstacc = [SELECT  id,Name,Phone,(SELECT Name,CloseDate,StageName From Opportunities)From Account Where Phone!=null ORDER BY CreatedDAte ASC];
        for(Account acc : lstacc)
        {
            System.debug('account name : '+ acc.Name);
            for(opportunity opp : acc.opportunities){
                System.Debug('Opp Name' + opp.name + 'opp stage ' + opp.StageName);
                
            }
        }
    }
    
    // version 2, descending order 
    
    public static void accountWithRelatedOppRev(){
        List<account>lstacc= New List <account>();
        lstacc = [SELECT id,Name,Phone, (SELECT Name,CloseDAte,StageName from opportunities) From Account where Phone!=null Order by createdDate  desc];
         for(account acc : lstacc)
         { system.debug('account name'+acc.Name);
          for(opportunity opp : acc.opportunities){
              system.debug(opp.Name+opp.CloseDate+opp.StageName);
          }
             
         }
    }
    
    
    // used case number 8  
    // query Account along with related contacts where Account Phone!=null. Now Display results through system.debug() in the following ways : account 
    // has #of contacts related
  
    
   
    public static void accountwithRelatedContacts1(){
      List<account> acclstk = New List <account> ();
        acclstk =[select id,Name, phone,(Select id,Name From contacts)from Account where phone!=null];
        for(account acc : acclstk){
                system.debug('account name'+acc.Name+'has'+acc.contacts.size()+'no of related contact');
            }
    }
    
    
    // **************Used case Number - 9****************************** important case 
    // Query Account along with related oppurtunities where Account Phone!=null.Now display results through system.debug() in following way:
    // account name has totalAmountonRelatedOPP worth Opportunities
    
    
    public static void accountRelatedOpportunity(){
        List <account> lstacc = New list <account>();
        lstacc=[Select id,name,phone,(select name,Amount from Opportunities)From account Where phone!=null];
        for(account acc: lstacc){
            decimal totalAmount =0;
            for(opportunity opp:acc.opportunities){
                if(opp.Amount!=null){
                    TotalAmount+=opp.Amount;
                }
            }
            system.debug('The Account named'+acc.name+'has total no  related opportunities ' + acc.opportunities.size() + 'of worth'+ TotalAmount);
        }
    }
    
    // case 10  create 2 Account Records with two seprate insert Statement . Then creat 2 account records with a single insert statement using list .
    
    public static void insertStateMentsOnAccount(){
        
        Account Acc= new Account();
        acc.name='rahul';
        acc.Phone='7869706115';
        acc.Industry='Apparel';
        acc.Fax='2333';
        acc.Website='abc.com';
        insert acc;
        
        Account Acc1= new Account();
        acc1.name='rahul1';
        acc1.Phone='7869706116';
        acc1.Industry='Apparel';
        acc1.Fax='2333';
        acc1.Website='abc.com';
        insert acc1;
    }
}