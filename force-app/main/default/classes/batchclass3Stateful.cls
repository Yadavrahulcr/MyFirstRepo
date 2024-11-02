public class batchclass3Stateful implements database.Batchable<sobject>, database.stateful,database.allowscallouts {
    
    public decimal sumofamount=0 ;
    public database.querylocator start(database.batchableContext bc){
        
        string query = 'select id,amount  from opportunity where StageName != \'closed won\' and  amount >0';
       // 'SELECT Id, Amount FROM Opportunity WHERE StageName != \'Closed Won\' AND Amount > 0'
        return database.getquerylocator(query);
    } 
    
    public  void execute(database.batchablecontext bc , list<opportunity> scope){
        
        for(opportunity opp: scope){
            sumofamount += opp.amount;
        }
        
        system.debug(sumofamount);
    }
    
    public void finish(database.batchablecontext bc ){
        system.debug(sumofamount);
    }

}