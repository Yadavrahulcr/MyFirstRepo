public class callouthandlerapex {
    @future(callout=true)
    //set<string>idset
    public static void methodtocallout(){
        
        /*

    callout - 3 class
  http->send
  httpRequest -> setendpoint
              -> setmethod
              -> setheader
              ->setbody
HttpResponse -> getStatusCode()
                getbody

 how to parse the json

1.JSON.deserialize(jsonSting,apexclassname)=> yaad rakhna hai
2.JSON.deseriaizeUntyped(jsonstring);


*/     string kabutar='';
        
         Http sneha = new Http();
         HttpRequest req = new HttpRequest();
        req.SetEndPoint('https://api.restful-api.dev/objects');
        req.SetMethod('GET');
        
        HttpResponse res = sneha.send(req);
       // string res = sneha.send(req);
        system.debug(res);
        system.debug(res.getStatusCode());
        system.debug(res.getStatus());
        system.debug(res.getBody());
        string responseee = res.getBody();
        
        list<object>apirespone = (list<object>)JSON.deserializeUntyped(responseee);
        system.debug(apirespone);
        
        for(object ob :apirespone ){
            system.debug('each object form list '+ob);
            Map<string,object>kuchmap = (Map<string,object>)ob;
            system.debug('mapdetails'+kuchmap);
            
            map<string,object>finalobject = (map<string,object>)kuchmap.get('data');
            system.debug(finalobject);
            if(finalobject!=null){
                if(finalobject.containskey('Strap Colour')){
                    kabutar=string.valueof(finalobject.get('Strap Colour'));
                    system.debug('==================================================>'+kabutar);
                }
            }
        }
    }
}