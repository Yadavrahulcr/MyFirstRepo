public with sharing class navminingControler {
    @AuraEnabled(cacheable=true)
    public static list<contact> getAccontrecord(id recordId){
        try {
              return [select name , email, phone from contact where accountid= :recordId];

            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled (cacheable=true)
    public static list<contact>getcontact(){
        try {
            return [select id,name,Email from contact ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}