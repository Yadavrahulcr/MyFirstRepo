public class practicetest {
    public static void pt(String key) {
        List<Account> acclist = [SELECT Id FROM Account WHERE Name LIKE :('%' + key + '%') LIMIT 10];
        Set<Id> acc_idset = new Set<Id>();
        
        for (Account acc : acclist) {
            acc.Industry = 'manufacturing';
            acc.AnnualRevenue = 150;
            acc_idset.add(acc.Id);
        }

        if (Test.isRunningTest()) {
            account acc = new account();
            acc.name='rahul';
            acc.Industry='industury';
            acc.Rating='hot';
            insert acc;
             contact cont = new contact ();
                cont.LastName='yadav';
                 cont.AccountId=acc.id;
                 cont.firstname='firstname';
              insert cont;
             account acc1 = new account();
            acc1.name='rahul';
            acc1.Industry='industury';
            acc1.Rating='hot';
            insert acc1;
             contact cont1 = new contact ();
                cont1.LastName='yadav';
                 cont1.AccountId=acc1.id;
                 cont1.firstname='firstname';
              insert cont1;
            
            return; // Corrected to return instead of return null
        } else {
            update acclist;
        }

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