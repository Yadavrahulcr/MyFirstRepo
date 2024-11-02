public class acchandlers {

    public static void deletetest(list<account>acclist){
        set<id>idset=new set<id>();
            for(account acc :acclist){
            idset.add(acc.id);
        }
        list<contact>contodelete= new list<contact>();
        for(contact con:[select id from contact where accountid in:idset]){
            contodelete.add(con);
        }
        if(!contodelete.isEmpty()){
            delete contodelete;
        }
        
    }
}