public class batch1 implements database.Batchable <sobject>,database.stateful,database.allowscallouts{

    public Database.QueryLocator start(database.batchableContext bc){
        string query = 'select id from account';
        return  Database.getQueryLocator(query);
    }

    public void  execute (database.batchableContext bc , list<account>scope){
        
        for(account acc :scope){
            System.debug(acc);
        }


    }
    public void  finish (database.batchableContext bc){
       
    }
}