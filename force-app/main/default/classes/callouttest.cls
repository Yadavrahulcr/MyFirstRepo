public with sharing class callouttest {
    //https://api.restful-api.dev/objects

    Http h = new Http();
    HttpRequest req = new HttpRequest();
   // req.setendPoint('https://api.restful-api.dev/objects');
    req.setEndPoint('https://api.restful-api.dev/objects');
    req.setMethod('GET');

    HttpResponse res = h.send(req);

    System.Debug(res);

}