public class newrandomuser 
{
    @future(callout=true)
    public static void makecallout()
    {
        Http h = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://randomuser.me/api/');
        req.setMethod('GET');
        
        HttpResponse Resp = h.send(req);
        
        
        
        if (Resp.getStatusCode() == 200) {
                Map<String, Object> responseMap = (Map<String, Object>) JSON.deserializeUntyped(Resp.getBody());
                List<Object> results = (List<Object>) responseMap.get('results');
                if (!results.isEmpty()) {
                    Map<String, Object> userInfo = (Map<String, Object>) results[0];
                    
                    // Extract user details
                    Map<String, Object> nameInfo = (Map<String, Object>) userInfo.get('name');
                    String firstName = (String) nameInfo.get('first');
                    system.debug(firstName);
                    String lastName = (String) nameInfo.get('last');
                    Map<String, Object> contactInfo = (Map<String, Object>) userInfo.get('location');
                    String email = (String) userInfo.get('email');
                    
                    // Create a new Contact record
                    Contact newContact = new Contact(
                        FirstName = firstName,
                        LastName = lastName,
                        Email = email
                    );
                    
                    insert newContact;
                    system.debug(newContact.id);
                }}
        
      /*  if(resp.getStatusCode()==200){
            Map<string,Object> responseMap = (Map<string,object>)JSON.deserializeUntyped(resp.getbody());
            list<object> results=(list<object>) responseMap.get('results');
            map<string,object> userInfo = (map<string,object>)results[0];
            // Map<String, Object> responseMap = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
              //  List<Object> results = (List<Object>) responseMap.get('results');
                //if (!results.isEmpty()) {
                //    Map<String, Object> userInfo = (Map<String, Object>) results[0];
                /*  Map<String, Object> nameInfo = (Map<String, Object>) userInfo.get('name');
                    String firstName = (String) nameInfo.get('first');
                    String lastName = (String) nameInfo.get('last');
                    Map<String, Object> contactInfo = (Map<String, Object>) userInfo.get('location');
                    String email = (String) userInfo.get('email');*/
            
       /*     Map<string,object>=nameinfo = (map<string,object>)userInfo.get('name');
            string firstName = (string) nameInfo.get(first);
            string lastName=(string)nameinfo.get('last');
            
            contact cont = new contact ();
            cont.FirstName = fistName;
            cont.LastName=lastName;
            insert cont;
            
            
        } */
        
        
        
    }
}
 /*if (response.getStatusCode() == 200) {
                Map<String, Object> responseMap = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
                List<Object> results = (List<Object>) responseMap.get('results');
                if (!results.isEmpty()) {
                    Map<String, Object> userInfo = (Map<String, Object>) results[0];
                    
                    // Extract user details
                    Map<String, Object> nameInfo = (Map<String, Object>) userInfo.get('name');
                    String firstName = (String) nameInfo.get('first');
                    String lastName = (String) nameInfo.get('last');
                    Map<String, Object> contactInfo = (Map<String, Object>) userInfo.get('location');
                    String email = (String) userInfo.get('email');
                    
                    // Create a new Contact record
                    Contact newContact = new Contact(
                        FirstName = firstName,
                        LastName = lastName,
                        Email = email
                    );
                    
                    insert newContact;
                }
            } else {
                System.debug('Error from API: ' + response.getStatus());
            }
        } catch (Exception e) {
            System.debug('Exception: ' + e.getMessage());
        }
    }*/