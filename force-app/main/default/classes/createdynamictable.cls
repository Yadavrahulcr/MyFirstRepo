public with sharing class createdynamictable {
    @AuraEnabled(cacheable = true)
    public static Map<String, String> getAllColumnsDetail(String objectApiName){
        Map<String, String> fieldToLabelMap = new Map<String, String>();
        Schema.SObjectType loadSchema = Schema.getGlobalDescribe().get(objectApiName);
        system.debug('loadSchema'+loadSchema);
        Map<String, Schema.SObjectField> fieldMap = loadSchema.getDescribe().fields.getMap();
         system.debug('filedMap'+fieldMap);
        for (Schema.SObjectField fld: fieldMap.values()) {
            if(fld.getDescribe().isAccessible()){
                fieldToLabelMap.put(fld.getDescribe().getName(), String.valueOf(fld.getDescribe().getLabel()));
            }
        }
        return fieldToLabelMap;
    }

    @AuraEnabled
    public static List<Sobject> showAddData(String selectedField, String objectName){
        List<String> fieldList = (List<String>) JSON.deserialize(selectedField, List<String>.class);
        String query = 'Select Id';
        for(String str : fieldList){
            query+= ', ' + str ;
        }
        query+= ' from ' + objectName;
        System.debug('Test: '+ query);
        List<Sobject> sobjectData = Database.query(query);
        return sobjectData;
    }
}