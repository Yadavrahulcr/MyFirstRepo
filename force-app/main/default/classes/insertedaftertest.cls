@istest
private class insertedaftertest {
    
    @testsetup
    static void dataprep(){
        account acc = new account (name='rahul', industry = 'manufacturing');
        insert acc;
        contact con = new contact (lastName='yadav', accountid=acc.id);
            insert con;
    }
    
    @istest
    static void methodtest(){
        
        list<account>acclist = [select id from account ];
        
        handleafterinsert.insertedafter(acclist,null);
        
        map<id,account>mapofacc = new map<id,account>(acclist);
        
        for(account acc :acclist){
            
            acc.Industry='test';
        }
        
        update acclist;
        
        handleafterinsert.insertedafter(acclist,mapofacc);
        
        
        
    }

}