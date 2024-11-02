public class OpportunityCacheHandler {
    
    public static void handleStageChange(List<Opportunity> newOpportunities, Map<Id, Opportunity> oldOpportunityMap) {
         Cache.OrgPartition orgPart = Cache.Org.getPartition('local.OpportunityStageChange');
        for(opportunity opp : newopportunities){
             
            if(opp.StageName!='closed won'&& oldOpportunityMap.get(opp.id).stageName=='closed won'){
             
                

                if(orgPart.contains(opp.id)){
                      OrgPart.remove(opp.id);
                    string idd = (string)OrgPart.get(opp.id);
                  
                   system.debug(idd);
                }
                else{
                     opp.StageName.addError('Warrning !!! You are changing the stage of a Closed Won Opportunity. To proceed, please hit save again.');
                    orgPart.put(opp.id,'test');
                }
            }
        }
    }
}