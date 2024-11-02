/*public with sharing class acccounthandler {
    public static void  creatcontact(list<account>lstacc) {
       list<contact> conlst = new list <contact>()
        for (account acc : lstacc)
        contact con = new contact()
        con.FirstName = acc.Name+'f.n';
        con.lastName= acc.Name+ 'ln';
        con.AccountId =acc.Id
         conlist.add(con);
    }
    if(!conlist.isempty()){
        instert.conlist;
    }
}*/



/*public class accounthelp{
    public static void creatopp (list<account>accl)
    list <opportunity> opl=new list <opportunity>();
      for(account acc : accl){
        opportunity opp = new opportunity ();
        opp.name = acc.name+'opp';
        opp.AccountId= acc.Id;
        opp.stageName='prospecting';
        opp.closeDate= system.taday();
          opl.add(opp)
      }
      if(!opplist.isempty()){
        isinsert opplist;
      }
}*/

// public class caseTriggerHelper{
//     public static void latestCaseNumber(list<case>caselist){
//         list<accout>acclist = new list <account>();
//         for(case cs : caselist){
//             if(cs.AccountId!=null){
//                 account acc = account();
//                 acc.AccountId= cs.AccountId;
//                 acc.latest_case_number__c= cs.casenumber;
//                 acclist.add(acc)
//             }
//             if(!acclist.isempty()){
//                 insert acclist;
//             }
//         }
//     }
// }

// public class opportunitytriggerhandler{
//     public static void opportunityAmmount(list<opportunity>lstopp)
//     { 
//         list<account> acclsit = new list<acccount>();
//         for(opportunity opp : lstopp)
//         {
//             if(opportunity.AccountId!=null)
//             {
//                 account acc = account();
//                 acc.Id = opp.AccountId;
//                 acc.recent_opportunity_amount__c = opp.amount;
//                 acclist.add(acc);
//             }
//             if(!acclist.isempty()){
//                 update acclist;
//             }
//         }
        
//     }
// }


// public class accounttriggerhelper()
// {
//   public static void relatedContactOrOpportunityre(list<account>acclist)
//   {
//     list <contact> conlist= new <contact> ();
//     list<opportunity> opplist = new list <opportunity> ();
//     for(account acc : acclist)
//     {
//         if(acc.contact__c)
//         {
//             contact con = new contact()
//             con.AccountId= acc.id;
//             con.lastName= acc.name+'ln'
//            conlist.add(con)
            
//         }
//         if(acc.opportunity__c && acc.IsActive__c)
//         {
//             opportunity opp= new opportunity();
//             opp.AccountId=acc.Id;
//             opp.name= acc.name;
//             opp.stageName='prospecting'
//             opp.closeDate=system.today();
//             opplist.add(op);

//         }

//         if(opplist.size()>0){
//             update opplist;
//         }
//         if(opplist.size()>0){
//             update conlist;
//         }
//     }
//   }
// }
            
   public class acccounthandler 
   {
    public static void updatedescription (list <account> acclist,Map<id,account>oldMap)
    {
        for(account acc : acclist)
        {
           if(acc.phone!=oldMap.get(acc.id).phone)
           {acc.description= oldmap.get(acc.id).phone+'------'+acc.phone;

           }
        }
    } 
   }