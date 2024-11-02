global class testcallout {
    global static void calloutmethod(){
        Http newcallout = new Http();
        HttpRequest req = new HttpRequest();
        req.setMethod('GET');
        req.setEndpoint('https://randomuser.me/api/');
        HttpResponse resp = newcallout.send(req);
        if(resp.getStatusCode()==200){
            system.debug(resp.getBody());
            string rsp0= resp.getBody();
            string resp1=rsp0.replace('number', 'number1');
            string resp2=resp1.replace('date','date1');
           // system.debug(resp2);
            apiresp res =(apiresp)JSON.deserialize(resp2, apiresp.class);
           // system.debug(res);
            system.debug(res.info.seed);
            list<apiresp.cls_results>reslist =res.results;
            system.debug(reslist);
            for(apiresp.cls_results rest : reslist){
              
                system.debug(rest.location.coordinates.latitude);

            }








           /* map<string,Object>apiresp = (Map<String,Object>)JSON.deserializeUntyped(resp.getBody());
            system.debug(apiresp);
            map<string,Object>oob=(map<String,Object>)apiresp.get('info');
            system.debug(oob);
            string seed = string.valueOf(oob.get('seed'));
            system.debug(seed);
             
            list<Object>oblist = (List<Object>)apiresp.get('results');
            system.debug(oblist);

            for(object obbb :oblist){
                map<string,object>newmap = (Map<String,Object>)obbb;
                if(newmap.containskey('id')){
                    Object nmmp =newmap.get('location');
                    system.debug(nmmp);
                     Map<String,Object>obbbbj=(Map<String,Object>)nmmp;
                     system.debug(obbbbj);
                     map<string,Object>nmmpp=(Map<String,Object>)obbbbj.get('coordinates');
                     system.debug(nmmpp);
                     String var = string.valueOf(nmmpp.get('latitude'));
                    system.debug(var);
                }

            }*/

            
            
            

        }
    }
}