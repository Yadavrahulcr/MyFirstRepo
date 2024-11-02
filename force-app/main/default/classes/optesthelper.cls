public class optesthelper {
    
    public static void ophelper(list<opportunity>tnew){
     boolean run=true; 
    if(run){
         run=false;
    set<id>idset=new set<id>();
    map<id,string>idacname=new map <id,string>();
    map<id,string>opmap=new map<id,string>();
    map<id,decimal>avgmap= new map <id,decimal>();
    for(opportunity opp: tnew)
    {
        if(opp.accountid!=null)
        {
            idset.add(opp.AccountId);
        }
    }   
    
    
  
    for(opportunity opp: [select id ,name ,accountid,account.name from opportunity where accountid in:idset])
    {  
        idacname.put(opp.accountid, opp.account.name);
        
        if(!opmap.containskey(opp.accountid)){
            opmap.put(opp.accountid,opp.name);
        }
        else{
            opmap.Put(opp.AccountId,opmap.get(opp.AccountId)+'   ,'+opp.name);
        }
    }
    
    list <aggregateResult> result = [select   avg(amount) avg  ,accountid from opportunity where accountid in:idset group by accountid ];
      for(aggregateResult res: result)
      {
          id accountid =(id)res.get('accountid');
          decimal avg = (decimal)res.get('avg');
          avgmap.put(accountid,avg);
      }
    
    list<opportunity>oplist=new list<opportunity>();
    for(opportunity o : tnew){
        o.Description = 'Related opprunity details are'+'\n' + 'Account Name->' + idacname.get(o.accountid) + '\n'+ 'Related opportunity record->'+opmap.get(o.accountid)+ '\n'+ 'Avarage amount-->'+ avgmap.get(o.AccountId);
        //oplist.add(o);
    }
   // update oplist;
        
   } 
    }}