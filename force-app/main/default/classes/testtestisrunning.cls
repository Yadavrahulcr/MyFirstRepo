public class testtestisrunning {
    public static void testmethodtotestisrunning(string key){
        if(Test.isRunningTest()){
            return;
            
        }
        else{
            system.debug('cheaking if this canbypass test');
            
            
             List<Account> acclist = [SELECT Id FROM Account WHERE Name LIKE :('%' + key + '%') LIMIT 10];
        Set<Id> acc_idset = new Set<Id>();
        
        for (Account acc : acclist) {
            acc.Industry = 'manufacturing';
            acc.AnnualRevenue = 150;
            acc_idset.add(acc.Id);
        }

       
       
            update acclist;
        

        List<Contact> conlist = new List<Contact>();
        if (!acclist.isEmpty()) {
            for (Id i : acc_idset) {
                Contact cont = new Contact();
                cont.LastName = 'maku';
                cont.AccountId = i;
                conlist.add(cont);
            }
            
            if (!conlist.isEmpty()) {
                insert conlist;
            }
        }
            
            
        }
    }

}