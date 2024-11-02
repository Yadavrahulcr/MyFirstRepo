public class opphand1 {
    public static void oppAmountCountOnAccount(List<Opportunity>oppList){
        List<Account> accToBeUpdate = new List<Account>();
        Set<Id> accIds = new Set<Id>();
        for(Opportunity opp :oppList){
            accIds.add(opp.AccountId);
        }
        List<AggregateResult> agrList = [select AccountId, sum(amount)amt from Opportunity
                                         where AccountId IN :accIds Group By AccountId ];
        Map<Id,Decimal> mapOfAcc = new Map<Id,Decimal>();
        for(AggregateResult agr :agrList){
            //(id) => type casting
            Id AccountId = (id)agr.get('AccountId');
            Decimal sum = (Decimal)agr.get('amt');
            mapOfAcc.put(AccountId,sum);
        }
        system.debug(mapOfAcc);
        
        for(Account acc :[select id, description from account where id in :mapOfAcc.keySet()]){
            acc.description =''+mapOfAcc.get(acc.Id);
            accToBeUpdate.add(acc);
        }
        if(accToBeUpdate.size()>0){
            update accToBeUpdate;
        }
    }
}