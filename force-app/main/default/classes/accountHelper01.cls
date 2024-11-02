// used case 10   insert 2 account records using single insert  statement (best practice)
public class accountHelper01 {
    public static void insertAccountWithList(){
        List <Account> lstacc = New List <Account>();
         
        Account Acc= new Account();
        acc.name='rahul';
        acc.Phone='7869706115';
        acc.Industry='Apparel';
        acc.Fax='2333';
        acc.Website='abc.com';
        lstacc.add(acc);      
        
        Account Acc1= new Account();
        acc1.name='rahul1';
        acc1.Phone='7869706116';
        acc1.Industry='Apparel';
        acc1.Fax='2333';
        acc1.Website='abc.com';
        lstacc.add(acc1);   
        
        if(!lstacc.Isempty()){
            insert lstacc;
        }
    }
    
   // *** used case 11  //Insert 5 Accounts with different account Name and phone ='123456' [use loop ]
     
    public static void accountCreationWithLoop(){
        List<Account>lstacc = New List <account>();
        for(Integer i=1;i<=5;i++){
            account acc= new account();
            acc.name='raa'+i;
            acc.Phone= '12345';
            acc.Industry='Apparel';
            acc.fax= '1234444';
            acc.Website='www.Rk'+i+'.com';
             lstacc.add(acc);   
        }
        if(!lstacc.isempty()){
            insert lstacc;
        }
    }
    
    // **  used case 12  Insert 5 opportunities with different Opportunity Name,close date = today's date and stage = 'prospecting 
    
    public static void opportunityWithLoop(){
     List<opportunity> oop = new list<opportunity>();
    for(integer i=1;i<=5;i++){
        opportunity opp = new opportunity();
        opp.Name= 'rahulji'+i;
        opp.CloseDate= system.today();
        opp.StageName='prospecting';
        oop.add(opp);
    }
    if(!oop.isempty()){
        insert oop;
    }}
    
    //** used case 13  insert and Account with 1 related contact 
    
    public static void AccountWithRelContactRecInsetation()
    {
        account acc = new account();
        acc.name = 'rahul007';
        acc.Industry='apearal';
        acc.fax='121';
        acc.Website='www.abc.com';
        insert acc;
        if(acc.id!=null){
            contact co = new contact();
            co.firstName='amit';
            co.lastName='yadav';
            co.AccountId= acc.id;
             insert co;           
        }
        
    }
    
    //*** used case 14 *** 
    // Insert an account along with 1 related contact and related opportunity .
    public static void accountWithRelConOpp(){
        account acc = new account ();
        acc.Name = 'rahul Yadav 007';
        acc.Industry ='appreal';
        acc.fax ='123';
        acc.Website ='www.rahulHero.com';
        insert acc;
        if(acc.id!=null){
            contact co = new contact ();
            co.firstName = 'amit';
            co.LastName='tondon';
            co.AccountId=acc.id;
            insert co;
            
            }
        if(acc.id!=null){
            opportunity opp = new opportunity();
            opp.name='ajay kumar';
            opp.stageName = 'prospecting';
            opp.CloseDate =system.today()+7;
            opp.AccountId=acc.id;
            insert opp;
            
            
            
        }
    }
    
    // **Used case 15 **
    // Insert 5 accounts with at least 1 related opportunity with each account.
    public static void accountwithoppWithloop(){
        List <Account> acclist = new list <account>();
        for(integer i=1;i<=5;i++){
            account acc = new account();
            acc.name = 'Rahul100'+i;
            acc.Industry= 'appreal';
            acc.fax= '123';
            acc.Website = 'www.aba'+i+'.com';
            acclist.add(acc);
           
        }
        if(!acclist.isempty()){
            insert acclist;
           
        }
         list <opportunity> oppp = new list <opportunity>();
        for(account acc : acclist){
            opportunity opp = new opportunity ();
            opp.Name=acc.name;
            opp.CloseDate= system.today()+12;
            opp.StageName= 'prospecting';
            opp.AccountId=acc.id;
            oppp.add(opp);
        }
        if(!oppp.isempty()){
            insert oppp;
        }
    }
    
    // ** used case 16 **
    // insert 5 accounts and atleast 1 contact and oppotunity for the related account;
    
    public static void relatedcontactndopp(){
        list <account> accl = new list <account>();
        for(integer i=7;i<=13;i++){
            account acc = new account();
            acc.Name ='rahul111'+i;
            acc.Industry ='appreal';
            acc.Fax = '234';
            acc.Website = 'www.abcz.com';
           accl.add(acc);
            system.debug(accl);
        }
       if(!accl.Isempty()){
            insert accl;
            
       }
         list<contact> coon = new list <contact>();
        for(account acc : accl){
            contact con = new contact();
            con.LastName = 'yadav';
            con.AccountId = acc.id;
            
            coon.add(con);
        }
        if(!coon.isempty()){
            insert coon;
           
       }
          // similarly we can add details related opportunity record 
           
       
                                  
    }
    
    // ** used case 17 **// 
    // Query accounts where phone = 123458, and update phone to 654321;
    public static void updateRec(){
        List <Account> acclist = new list <account>();
        acclist = [Select Id,Name,phone from Account where phone = '123458'];
        for(account acc : acclist){
            acc.Phone='654321';
        }
        if(!acclist.IsEmpty()){
            update acclist;
        }
    }  // not excuting this code coz above mentioned query might not return any thing
       
    // ***used case 18****
    // Query contacts where Email is null and update their email with LoyalrahulYadav@gmail.com;
    
    public static void emailUpdate(){
        List <contact> conc = New List <Contact>();
        conc= [SELECT id,name,email from contact where email=null];
        if(!conc.isEmpty()){
           for(contact con : conc){
            con.Email='loyalrahulyadav@gmail.com';
               system.debug(conc);
        }
            if(!conc.IsEmpty()){
                
             update conc;
            }
            
        }
       
    } 
        // *** used case 19 ***
    // Query accounts where phone = 654321 and update phone to 123456.Also create 5 new account record {hint : use upsert};
    
    public static void upsertRecord(){
        List <account> acclist = new List<account>();
        acclist= [SELECT id,name,phone from account where phone ='654321'];
        for(account acc : acclist){
            acc.Phone='123456';
            
        }
        for(integer i=10 ; i<=16 ; i++){
            account ac = new account();
            ac.name = 'rahul yada' + i;
            ac.Industry = 'appreal';
            ac.fax = '123';
            ac.Website = 'www.accbc'+i+'.com';
            acclist.add(ac);
            
            if(!acclist.IsEmpty()){
                upsert acclist;
            }
            
        }
    }
    
        // *** used case - 20***
    // Query opportunities where created date is last month and updated their stage to closed won . Also create 5 new Opportunities [hint :use upsert]
    public static void upsertOpp(){
        list<opportunity> opp = new list <opportunity>();
        opp = [SELECT Id,name,StageName from opportunity where createdDate = Last_Month];
        if(!opp.IsEmpty()){
            for(opportunity opt:opp){
                opt.StageName='closed won';
                }
        }
        for(integer i= 999; i<=1010; i++)
        { opportunity oppt= new opportunity();
         oppt.Name= 'yadavji';
         oppt.CloseDate = System.today()+7;
         oppt.StageName='prospecting';
         opp.add(oppt);
             
         }
        if(!opp.IsEmpty()){
            upsert opp;
        }
    }
    
    //** used case - 21 **
    //Delet account record where industry  = 'appreal'. verify whether records are deleted or not through recyclebin
    
    public static void Deletrec()
    {
        List<account> listacc = New list <account> ();
        listacc = [SELECT Id,Name,industry from account where industry = 'appreal'];
        if(!listacc.isEmpty()){
            delete listacc;
            
                        
            
        }
        
        
    }
    
     // *used case -22 **// 
            // UnDELETE ACCOUNT RECORDS DELETE IN PREVIOUS POINT.CHEAK RECYCLE BIN IS NOT HAVING  those records once undeleted and they will be under the accounts
            // tab in the app.
            
    public static void undeleteRec(){
        list <account> lstacc = New list <account>();
        lstacc= [SELECT id , name,industry from account where industry = 'appreal' all rows];
        if(!lstacc.IsEmpty()){
            undelete lstacc;
        }
    }          

    ///* used case- 23 **//
    	//query Accounts Created last week . now insert one opportunity under each account ;
    
    public static void insertOpptunityToAccount(){
        list<account> lstacc = new list<account>();
        list<opportunity> opli = new list <opportunity>();
        lstacc = [SELECT Id,name From account where createdDate= last_week];
        if(!lstacc.IsEmpty()){
            for(account acc : lstacc)
            { opportunity opp = new opportunity();
             opp.Name=acc.name;
             opp.AccountId=acc.Id;
             opp.StageName= 'prospecting';
             opp.CloseDate= system.today()+7;
             opli.add(opp);
             
            }
            if(!opli.isEmpty()){
                insert opli;
            }
        }
    }
    
    ///*** used case -25***
    /// query opportunities created in last 7 days . if the opportunity stage is closed won  then update description as opportunity is closed won ,
    // in case of closed lost update description as opportunity is closed lost'otherwise'opportunity is open'
    
    public static void  opportunitiesupdate(){
        list<opportunity> lstop = new list <opportunity>();
        lstop = [Select Id,Name,stageNAme from opportunity where createdDate=last_week];
        if(!lstop.IsEmpty()){
            for(opportunity opps: lstop){
                if(opps.stageName=='closed won'){
                    opps.description ='opportunity is closed won';
                   }
                else if(opps.stageName=='closed lost'){
                    opps.description = 'opprtunity is closed lost';
                    
                }
                else{
                    opps.description= 'opportunity is open';
                    
                }
                if(!lstop.IsEmpty()){
                    update lstop;
        
    }
 
 
}
                }
            }

//*** used case 26 */
// query account with related contacts in the last one month . populate total contacts  field on  Account by counting number of the 
// contacts associated with account . if no contact then populate 0

public static void relatedContactCounter(){
    list<account> acclist = [select id , name ,Total_contacts__c,(Select id, LastName from contacts ) from account where createdDate=Last_Month];
    if(acclist!=null) {
        for(account acc : acclist)
        {
            acc.total_contacts__c =acc.contacts.size();
        }
    }
    if (!acclist.isEmpty()){
        update acclist;

    }
}


// used case no 27 // 
//query  contacts created and if mobile number is not populated on contact then copy phone of the related account of related contact ;

public static void copyphoneofrelAccount(){
    list <contact> conlist = [select id ,  MobilePhone, account.phone from contact where AccountId!=null];
    if(!conlist.isEmpty()){
       for (contact con : conlist){
             if(con.MobilePhone==null){
               con.MobilePhone=con.account.phone;
             }
       }
    }
    if(!conlist.isEmpty()){
        update conlist;
    }

}
// used case -31 // 

// insert 200 account records and make sure the qoverner limit is not hit . also delete them after creation 
 public static void createNDeleteAccountRec(){
    list <account> acclist = new list <account>();

    for(integer i = 1; i <=200; i++){
        account acc = new account();
        acc.name = 'demo'+i;
        acclist.add(acc);
       }
       if(!acclist.isempty()){
        insert acclist; 
       }
       
      acclist=[select Id from account where createdDate = today];
       if(!acclist.isempty()){
        delete acclist;
       }

 }   

  }