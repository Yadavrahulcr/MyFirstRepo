public with sharing class oppupdate {
    public static void opu(list<Opportunity>oplist,map<id,Opportunity>oldmap) {
        for(Opportunity opp : oplist){
            if((oldmap==null)||(opp.StageName!=oldmap.get(opp.Id).StageName)){
               if(opp.StageName=='closed won')
               {
                opp.Description='closed won';
               }
               else {
                 opp.Description='pending';    
            
               }

            }
        }


    }
}