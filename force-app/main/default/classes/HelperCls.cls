public with sharing class HelperCls {
    //public static boolean aim =true;
    public static void doOp(List<Account> newAccLst,Map<id,account> ccold){
      
        List<contact> contactsToUpdate = new List<contact>();
        boolean aim =true;
        //if(aim){
        for(Account acc :newAccLst){
         

        if (acc.LastModifiedDate != ccold.get(acc.Id).LastModifiedDate) {

           contact co =new contact();
           co.lastname='hi';

            contactsToUpdate.add(co);

        }
        }

        insert contactsToUpdate;
       }
       //aim=false;
    

}