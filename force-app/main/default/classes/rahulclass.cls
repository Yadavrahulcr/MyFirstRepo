public with sharing class rahulclass {
    public static void updatePhone(){
        List<account> newlist= new list<account>();
        list<account> acclist = [select id,Phone from account where Phone='7869706115'];
       for(account acc: acclist )
       {
         acc.Phone='7869706116';

          newlist.add(acc);

       }
       update newlist;

    }
}