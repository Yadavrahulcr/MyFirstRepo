global class kalyanicallout {
   
  global static  void calloutm(){

    Http h = new Http();
    HttpRequest req = new HttpRequest();
    req.setEndpoint('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
    req.setMethod('GET');

    HttpResponse res = h.send(req);
    System.debug('Response:' + res);
    System.debug('Response Body:' + res.getBody());
    
    if(res.getStatuscode()==200){
     
     string resp1 = res.getBody().replace('ID Nation', 'IDNation');
     resp1=resp1.replace('ID Year', 'IDYear');
     resp1=resp1.replace('Slug Nation', 'SlugNation');
     System.debug(resp1);

     apirres apr = (apirres)JSON.deserialize(resp1, apirres.class);
     System.debug(apr);
     list<apirres.cls_source>finres = apr.source;
     System.debug(finres);
     for(apirres.cls_source arc : finres){
        System.debug(arc);
        apirres.cls_annotations lis = arc.annotations ;
        System.debug(lis);
        System.debug(lis.source_name);
     }




    /* Map<string,Object>apiresponse = (Map<String,Object>)JSON.deserializeUntyped(res.getBody());
     System.debug(apiresponse);
    List<Object>source = (List<Object>)apiresponse.get('source');
    System.debug(source);
    for(Object ob:source){
           Map<String,Object>rest = (map<string,Object>)ob;
           System.debug(rest);
           Map<String,Object>finalobje = (map<string,Object>)rest.get('annotations');
           System.debug(finalobje);
           //string sourceName = string.valueof()
           System.debug(finalobje.get('source_name'));
           string sn = string.valueOf(finalobje.get('source_name'));
           System.debug(sn);
    }*/


    }

  }
}