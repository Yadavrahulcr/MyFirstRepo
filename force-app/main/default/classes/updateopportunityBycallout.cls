global class updateopportunityBycallout implements Database.Batchable <sobject> ,Database.allowsCallouts{
 
    global database.querylocator start(Database.batchableContext bc ){
       string query ='select id,test_update__c,test_id__c from opportunity';
           return Database.getquerylocator(query);
    }
    global void execute(database.BatchableContext bc, list<opportunity>scope){
        system.debug('this block is getting executeed');
        map<string,string>mapIdAndName = new map<string,string>();
        http h = new http();
        httpRequest req = new httpRequest ();
        req.setEndpoint('https://qa-salesforce.acuityplatform.com/api/v1/salesforce/licensee/licenseeType/5');
        req.setMethod('GET');
        req.setHeader('X-Salesforce-Organization-Id','00DRK000001gvKj');
        
        HttpResponse res = h.send(req);
        if(res.getstatuscode()==200){
            system.debug(res.getbody());
            map<string,object>apiresp = (map<string,object>)JSON.deserializeUntyped(res.getbody());
            system.debug(apiresp);
            list<object>accutaldata= (list<object>)apiresp.get('ArrayList');
            
            for(object ob : accutaldata){
                
                map<string,object> eachiteam = (map<string,object>)ob;
                mapIdAndName.put(string.valueof(eachiteam.get('id')), string.valueof(eachiteam.get('displayName')));
                
                
            }
            
            system.debug(mapIdAndName);
                
        }
        
        for(opportunity opp: scope){
            if(opp.test_id__c != null){
                opp.test_update__c=mapIdandName.get(opp.test_id__c)+' - '+opp.test_id__c;
            }
        }
        
        update scope;
        
    }
    
    global void finish(database.BatchableContext bc){
        
    }
}