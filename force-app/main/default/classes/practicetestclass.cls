public class practicetestclass {
    public static void cheaktestcl(string key){
        list<account>acclist = [select id from account where name like :('%' + key + '%')];
        system.debug(acclist);
        set<id>idset = new set<id>();
        for(account acc : acclist){
            acc.AnnualRevenue = 700000;
            idset.add(acc.id);
           
        }
        
        update acclist;
        list<contact>listtoinsert = new list<contact>();
        
        for (id i : idset){
            contact cont = new contact();
             cont.AccountId=i;
             cont.lastname='yadavaaa';
            listtoinsert.add(cont);
        }
        
        insert  listtoinsert;
        
        
    }

}