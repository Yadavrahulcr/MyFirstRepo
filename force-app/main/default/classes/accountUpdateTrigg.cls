public with sharing class accountUpdateTrigg {
    public static void updateShipping(list <account> lstacc){
        for(account acc : lstacc){
            if(acc.copy_billing_to_shipping__c && acc.BillingAddress != null && acc.billingCountry!=null && acc.billingPostalCode!=null && 
            acc.billingState!=null && acc.BillingStreet != null){
                acc.Shippingcity = acc.Billingcity;
            }
        }

    }

    public static void createrelcontact(list<account> acclist){
        list <contact> conlist = new list <contact>();
       for(account acc : acclist){
         contact con = new contact ();
         con.lastName = acc.name+'l.n';
         con.AccountId = acc.Id;
         conlist.add(con);
       }
       if(!conlist.isEmpty()){
        insert conlist;
       }
    } 

    public static void amirgarib(list<account>acclist){
        list <account> acl = new list <account>();
        for(account acc : acclist){
            if(acc.annualrevenue !=null && acc.annualrevenue <100){
                acc.Description = 'garib';
                }
                else {
                    acc.Description = 'amir';

                }

                acl.add(acc);
        }
 }

}