public class My2ndApiClass {
    
    public static void handlercls(Set<String> accIds) {
        for (String accId : accIds) {
            Account acc = [SELECT Id, Population_Year__c FROM Account WHERE Id = :accId LIMIT 1];
            if (acc != null) {
                calloutme(acc.Id, acc.Population_Year__c);
            }
        }
    }

    @future(callout=true)
    public static void calloutme(String accId, String year) {
        Map<String, String> populationMap = new Map<String, String>();
        Http sendRequest = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        req.setMethod('GET');

        HttpResponse res;
        try {
            res = sendRequest.send(req);
        } catch (Exception e) {
            System.debug('HTTP request failed: ' + e.getMessage());
            return; // Exit if callout fails
        }

        if (res.getStatusCode() == 200) {
            String response = res.getBody();
            Map<String, Object> apiResponse = (Map<String, Object>)JSON.deserializeUntyped(response);
            List<Object> data = (List<Object>)apiResponse.get('data');

            for (Object ob : data) {
                Map<String, Object> finalResult = (Map<String, Object>)ob;
                String year2 = String.valueOf(finalResult.get('ID Year'));
                String population = String.valueOf(finalResult.get('Population'));
                populationMap.put(year2, population);
            }

            String population = populationMap.get(year);
            if (population != null) {
                Account acc = new Account(Id = accId, Integeration_Wali_Field__c = population);
                update acc;
            }
        } else {
            System.debug('HTTP request failed with status: ' + res.getStatus());
        }
    }
}