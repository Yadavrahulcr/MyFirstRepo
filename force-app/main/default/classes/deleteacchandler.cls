public class deleteacchandler {
    public static void cheakdelete(list<account>newlist){
        for(account acc:newlist){
            if(acc.Allow_delete__c== false)
                acc.adderror('account cannot be deleted');
        }
    }
}