public class importantopp {
public static void maxopp(list<opportunity>newlist,list<opportunity>oldlist , map<id,opportunity>oldmap){
    set<id>idset=new set <id>();
    for(opportunity opp : newlist)
    {
        if(opp.accountId!=null){
            idset.add(opp.accountid);
        }
    }
}
}