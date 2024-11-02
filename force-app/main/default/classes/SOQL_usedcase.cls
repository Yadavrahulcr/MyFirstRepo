//** usedCase-1 **
//Write an apex program, to fetch all banking Account records from the 
//object and represent the records on the debug log

public class SOQL_usedcase {
    public static void Getbanking_details(){
        List<account> lstacc = [Select id,name,phone , industry , annualRevenue
                               from Account where industry = 'appreal'];
        
        System.debug(lstacc.size());
        if(!lstacc.IsEmpty()){
            for(account acc : lstacc){
                system.debug(acc);
            }
        }
    }
  // ** used case -2 ***
  // Write an SOQl query to fetch only those case whose priority is high;
    public static void caseWhClause(){
    List <case> lstcase = [select id, status,priority,type ,reason , origin,
                          subject from case where priority = 'high'];
    system.debug(lstcase.size());
    for (case ca : lstcase){
        system.debug(ca);
    }
   }
    
    // ** used case -3 **// 
    // Write an apex program to fetch all the Account Records based on the
    // specified name at run time .
    public static void dynamicIndustury(string industryName)
    {
        if(industryName != null && industryName!=''){
           List <account> lstacc = [select id, name,industry
                                    from account 
                                    where 
                                    industry =: industryName];// please note 
                                                                                 
            system.debug(lstacc.size());
            for(account acc : lstacc){
                system.debug(acc);
            }
        }
        
        
        
    }
}