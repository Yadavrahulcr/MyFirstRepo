public class conthandler {
    public static boolean isexecuted = false;
    
    public static void method1(set<id>idseet){
        string ide ;
        if(!isexecuted){
            isexecuted = true;
           contact cont = [select id from contact where id in:idseet limit 1];
               ide =cont.id;
            methodds(ide);
        }
    }
    
    @future(callout=true)
    public static void methodds(string ide){
        string imgurl ;
        if(!isexecuted){
            isexecuted=true;
            
            
            Http httpClass = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndPoint('https://www.reddit.com/r/Wallstreetbets/top.json?limit=10&t=year');
        req.setMethod('GET');
        HttpResponse res = httpClass.send(req);
        system.debug(res.getStatus());
        
        if(res.getStatusCode()==200){
            string response = res.getBody();
            // Map<String, Object> apiResponse = (Map<String,Object>)(response);
            system.debug(res.getBody());
            WallStreetbetInt2Wrapper1 myAPiResponse = (WallStreetbetInt2Wrapper1)JSON.deserialize(res.getBody(),WallStreetbetInt2Wrapper1.class);
            system.debug(myAPiResponse);
            WallStreetbetInt2Wrapper1.Data_R dataa = myAPiResponse.data;
            system.debug(dataa);
            List<WallStreetbetInt2Wrapper1.Children> dataa2 = dataa.Children;
            system.debug(dataa2);
            for(WallStreetbetInt2Wrapper1.Children  eachdata: dataa2){
                if(eachdata.data.preview!=null && !eachdata.data.preview.images.isEmpty()){
                    string IntIdd = eachdata.data.preview.images[0].source.url;
                    system.debug(IntIdd);
                    imgurl = IntIdd;
                    
                }
            }
        }
            
            
             contact con = new contact ();
                con.id = ide;
                con.Description=imgurl;
                update con;
            }
              
                  
                  
            
                          
        }
    }