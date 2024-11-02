public class batchcalss2passingvalueTobatch implements Database.batchable<sobject>,database.stateful,database.AllowsCallouts {
      
    public decimal reve ;
    public batchcalss2passingvalueTobatch(decimal rev){
         this.reve = rev;
    }
    
    public database.querylocator start (database.batchableContext bc){
        
        string query = 'select id from opportunity where Amount >'+String.valueOf(reve); 
        
        return database.getQuerylocator(query);
    }
    
    public void execute (database.batchableContext bc, list<opportunity> scope){
        
        for(opportunity opp : scope){
            opp.amount=50001;
        }
        
        update scope;
        
    }
    
    public void finish (database.batchablecontext bc ){
        
    }

}