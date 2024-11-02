public with sharing class DoCallouts {

    public class fromJSON{
        public Integer status;	//200
        public cls_msg msg;
        public cls_results[] results;
    }
    
    public class cls_msg {
    }

    public class cls_results {
            public String locale;	//en_US
            public String hostname;	//www.tripadvisor.com
            public String hreflang;	//en
            public String pointOfSaleName;	//United States
            public String pointOfSaleNameInCurrentLocale;	//United States
        }
    
    public static void currencyMethod(){

        try{
        
        HTTP http =new HTTP();

        //String apiKey = 'e07bc65eb9254de29e0acef77d80b503';

        String callUrl = 'https://restaurants222.p.rapidapi.com/languages';

        HttpRequest request = new HttpRequest();
        request.setEndPoint(callUrl);
        request.setMethod('GET');
        request.setHeader('X-RapidAPI-Key', '1021c7ea53mshf047f750a9b4967p1a6648jsn84ba38a85230');
        request.setHeader('X-RapidAPI-Host', 'restaurants222.p.rapidapi.com');

        HttpResponse response = http.send(request);
        System.debug('Response Code' + response.getStatusCode());

        System.debug('Response from API is ----> '+ JSON.serialize(response.getBody())); 

        fromJSON fj= (fromJSON) System.JSON.deserialize(response.getBody(), fromJSON.class);

        system.debug('json status' + fj.status);

        for(cls_results c :fj.results){
            system.debug('pointOfSaleName--> '+ c.pointOfSaleName);
        }

        

        }
        catch(exception e){
            System.debug('exception' + e.getMessage());
        }
    }
}


//e07bc65eb9254de29e0acef77d80b503

/*

@future(callout=true)
public static void kuchbhi(){
    htpp
}


*/