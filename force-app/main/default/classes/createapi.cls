@RestResource(urlMapping='/createaccapi')
global with sharing class createapi {

    @httpPost
    global static void createaccount(){
        
        //to store request
        RestRequest req = RestContext.request;
        system.debug('request'+req);
        system.debug(req.requestBody.tostring());
        if(string.isNotBlank(req.requestBody.tostring())){
            wrapper res = (wrapper)system.JSON.deserialize(req.requestbody.tostring(),wrapper.class);
            system.debug('Res++++'+Res);
            account acc = new Account();
            acc.name=Res.Name;
            try{
                insert acc;
                string responseBody ='{"status": "sucess", "msg": "account created"}';
                RestContext.response.addHeader('content-type','application/json');
                RestContext.response.responseBody=Blob.valueof(responseBody);
                return;
            }catch(exception e){
                system.debug('exeption line number++'+e.getLineNumber());
                system.debug('exception Message++'+e.getMessage());              
  
            }
            
            
        }
    }
    
    public class wrapper{
        public string name;
        public string email;
        public string annualrevaunue;
    }
}