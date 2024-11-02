public class mybc implements database.batchable <sobject>{
    public string pram;
    public mybc(string input){
        this.pram=input;
    }
    public database.querylocator start(database.batchablecontext bc ){
  
           
        return database.getquerylocator([select id from account where name like :'%pram%' ]);
    }
    
     public  void execute (database.batchablecontext bc ,list<account>scope ){
         for(account acc : scope){
             system.debug(acc.name);
         }
    }
        public  void finish (database.batchablecontext bc  ){
        
    }
}