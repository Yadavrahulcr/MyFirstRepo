public with sharing class ncallout {

public static void methodtocallout (){    
    string nameofcolor ;
    Http h = new Http();
    HttpRequest req = new HttpRequest();
   // req.setendPoint('https://api.restful-api.dev/objects');
    req.setEndPoint('https://api.restful-api.dev/objects');
    req.setMethod('GET');

    HttpResponse res = h.send(req);

    System.Debug(res);

    if(res.getStatusCode()==200){
        system.debug(res.getBody());
    }
    List<Object>objlist = (List<Object>)JSON.deserializeUntyped(res.getBody());
    system.debug(objlist);

    for(object obj : objlist){

        Map<String,Object>map1=(Map<String,Object>)obj;
        System.debug(map1);
        if(map1.get('data')!=null){
            map<string,object>finalmap = (Map<String,Object>)map1.get('data');
            system.debug(finalmap);
            if(finalmap.containsKey('Strap Colour')){
                system.debug('reached here ');
                system.debug(finalmap.get('Strap Colour'));
                nameofcolor=string.valueOf(finalmap.get('Strap Colour'));

            }

        }

    }
}
}