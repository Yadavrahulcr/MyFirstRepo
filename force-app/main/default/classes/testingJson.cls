public with sharing class testingJson {
    
    private static final String BASE_URL = 'https://qa-salesforce.acuityplatform.com/api/v1/salesforce';
    private static final String API_KEY_HEADER = 'X-Salesforce-Organization-Id';
    private static final String API_KEY_VALUE = '00DRK000001gvKj';

//List<Map<String, Object>>
    public static void  getLicenseesByType(String licenseeTypeId) {
        HttpRequest req = new HttpRequest();
        req.setEndpoint(BASE_URL + '/licensee/licenseeType/' + licenseeTypeId);
        req.setMethod('GET');
        req.setHeader(API_KEY_HEADER, API_KEY_VALUE);

        Http http = new Http();
        HttpResponse res = http.send(req);
        system.debug(res.getBody());

        if (res.getStatusCode() == 200) {

          map<string,object>apiresponse = (map<string,object>)JSON.deserializeUntyped(res.getBody());
          system.debug('apiresponse++++'+apiresponse);
          map<string,Object>mapArraylist=(map<string,object>)apiresponse.get('apiResponse');
          system.debug(mapArraylist);
          List<Object>finallist = (list<object>)mapArraylist.get('ArrayList');

          system.debug('finallist+++'+finallist);
          map<string, string> mapIdName = new map<string, string>();
        for (object obj : finalList) {
            if (obj != null) {
                map<string, object> objMap = (map<string, object>) obj;
                system.debug(objMap);
                if (objMap != null && objMap.containsKey('id') && objMap.containsKey('name')) {
                    string id = string.valueOf(objMap.get('id'));
                    string name = string.valueOf(objMap.get('name'));
                    if (id != null && name != null) {
                        mapIdName.put(id, name);
                    }
                }
            }
        }

          System.debug(mapidName);
         
        







































           /* Map<String, Object> responseMap = (Map<String, Object>) JSON.deserializeUntyped(res.getBody());
            system.debug('response'+responseMap);
           





            Map<String, Object> apiResponse = (Map<String, Object>) responseMap.get('apiResponse');
            system.debug('respone2'+apiResponse);
            List<Map<String, Object>> licensees = new List<Map<String, Object>>();
            if (apiResponse.containsKey('ArrayList')) {
                for (Object instance : (List<Object>) apiResponse.get('ArrayList')) {
                    licensees.add((Map<String, Object>) instance);
                }
            }

            system.debug('finalList'+licensees);
           // return licensees;*/
        } else {
            throw new CalloutException('Failed to get Licensees: ' + res.getBody());
        }
    }
    
}