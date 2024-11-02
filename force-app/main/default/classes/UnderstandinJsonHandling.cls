global class UnderstandinJsonHandling {

    global static void handleJson(){
        
        Http callout = new Http();
        HttpREquest req = new HttpRequest();
        req.setEndPoint('https://www.reddit.com/r/salesforce/hot.json?limit=1');
        req.setMethod('GET');
        HttpResponse resp = callout.send(req);
        
       //system.debug(resp.getBody());
        string jasonRespone = resp.getBody();
        system.debug(jasonRespone);
        list<RedditResponse1.Data> apiresp = new list<RedditResponse1.Data>();
        RedditResponse1 apiResponse = RedditResponse1.parse(jasonRespone);
        List<RedditResponse1.Children> redditPosts = apiResponse.Data.Children;
            
            
        
                
        
    }
    
    
    
    
}