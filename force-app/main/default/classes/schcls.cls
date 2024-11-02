public class schcls implements system.schedulable{
    public void execute(system.schedulablecontext sc){
        string input = 'r';
        mybc bc= new mybc(input);
        database.executebatch(bc,200);    
    }
}