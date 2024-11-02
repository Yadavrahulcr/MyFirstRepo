public class AccountTriggerHelp{
    Public static  void relatedcon(list<account>lstacc){
        list <contact>nl=new list <contact>();
        for(Account acc : lstacc){
            Contact con = new Contact ();
            con.AccountId= acc.Id;
            con.LastName = acc.Name+'Yadav';
            nl.add(con);
        }
        if(!nl.IsEmpty()){
            insert nl;
        }
    }
}