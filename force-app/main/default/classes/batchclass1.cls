public class batchclass1 implements Database.batchable <sobject> ,database.allowscallouts,Database.stateful {

    public database.querylocator start(database.batchableContext bc){
        
        string query ='select id from account where name like \'%ra%\'';  // this is called single escaping quote 
          return Database.getquerylocator(query);
        
    }
    
    public void execute (database.batchableContext bc, list<account>scope){
        
        for(account acc : scope){
            
            acc.name = 'rahull yadav';
        }
        
        database.update (scope);
        
    }
        /*public void execute(Database.BatchableContext bc, List<Account> scope) {
        for (Account acc : scope) {
            acc.Name = 'Rahull Yadav';
        }
        Database.update(scope);
    }*/

    
    
    
    public void finish (database.batchablecontext bc){
        
    }
}