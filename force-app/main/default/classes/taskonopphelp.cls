public class taskonopphelp {
    public static void createTask(list<opportunity>updatedlist,map<id,opportunity>oldmap){
        list<task>tlist=new list<task>();
        for(opportunity opp : updatedlist){
            if(opp.stageName!=oldmap.get(opp.id).stageName){
                task t = new task();
                t.whatid=opp.id;
                t.ownerId= userinfo.getuserid();
                t.Subject= 'opportunity status changed';
                t.Priority='normal';
                tlist.add(t);
                
            }    
            if(!tlist.isempty()){
                insert tlist;
            }
            
        } 
    }
}