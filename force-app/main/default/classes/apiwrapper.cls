global class apiwrapper {
    
    global static void methodnameeee(){
        
        Http h = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://api.restful-api.dev/objects');
        req.setMethod('GET');
        HttpResponse res = h.send(req);
        
        if(res.getstatuscode()==200){
            system.debug(res.getbody());
            string apiresp = res.getbody();
            apiresp = apiresp.replace('capacity GB', 'capacityGB');
            system.debug(apiresp);
           list<wrappertest>arp = (list<wrappertest>)JSON.deserialize(apiresp,list<wrappertest>.class);                       
            system.debug(arp);
            system.debug(arp[0]);
            system.debug(arp[0].id);
            
            
        }
    }
    
}