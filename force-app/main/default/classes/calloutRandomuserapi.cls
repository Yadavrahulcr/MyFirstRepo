public with sharing class calloutRandomuserapi {
   public static void calloutmethod(){
       string apiresoponce=null;
       Http h= new Http();
       HttpRequest req = new HttpRequest();
       req.setMethod('GET');
       req.setEndpoint('https://randomuser.me//api');
       HttpResponse res= h.send(req);

       if(res.getStatusCode()==200){
        system.debug(res.getBody());
        apiresoponce=res.getBody();
        apiresoponce=apiresoponce.replace('number', 'number1');
        apiresoponce=apiresoponce.replace('date', 'date1');
        system.debug(apiresoponce);
        ruapiresp rspapi= (ruapiresp)JSON.deserialize(apiresoponce,ruapiresp.class);
        system.debug(rspapi);
        list<ruapiresp.cls_results>r1 =rspapi.results;
        System.debug(r1);
        for(ruapiresp.cls_results r: r1){
            //System.debug(r.name.title+''+r.name.first+''+r.name.last);
            system.debug(r.location.coordinates.latitude);
            ruapiresp.cls_location r2 =r.location;
            System.debug(r2.coordinates.latitude);
            
           // System.debug(typeof(r2.coordinates.latitude));
           // System.debug(Type(r2.coordinates.latitude));


        }
       }
      


   }
}