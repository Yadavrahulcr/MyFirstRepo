global class callouthandler {
    //set<string>newset
    global static void clloutmethod(){
        string variabletoupdate  = '';
        
       Http callout = new  Http();
       HttpRequest req = new httpRequest();
       req.setEndPoint('https://api.restful-api.dev/objects');
        req.setMethod('GET');
        HttpResponse res = callout.send(req);
        system.debug(res.getBody());
        
     /*  list<object>apirespone = (list<object>)JSON.deserializeUntyped(res.getbody());
        system.debug(apirespone);
        
        for(object item: apirespone){
            map<string,object>resp = (map<string,object>)item;
             Map<String, Object> data = (Map<String, Object>) resp.get('data');
            system.debug(data);
            if(data!=null){
                if(data.containskey('CPU model')){
                    variabletoupdate = string.valueof(data.get('CPU model'));
                }
            }
            
        }
                                
        system.debug(variabletoupdate);    */
        
   List<ApiResponseWrapper1> apiResponse = (List<ApiResponseWrapper1>) JSON.deserialize(res.getBody(), List<ApiResponseWrapper1>.class);
    system.debug(apiResponse);
        for(ApiResponseWrapper1 apres:apiResponse ){
            if (apres.data != null) {
            if (apres.data.capacity != null) {
                system.debug(apres.data.capacity);
                
                
            }
            }
            
            
        }
           
    }

}