public with sharing class SearchableComboboxController {
    @AuraEnabled(cacheable=true)
    public static List<WrapperClass> getAccounts() {
        List<Account> accounts = [SELECT Id, Name FROM Account ORDER BY Name ASC];
        List<WrapperClass> accountList = new List<WrapperClass>();

        for (Account acc : accounts) {
            accountList.add(new WrapperClass(acc.Id, acc.Name));
        }
        return accountList;
    }

    public class WrapperClass {
        @AuraEnabled
        public String value { get; set; }
        @AuraEnabled
        public String label { get; set; }

        public WrapperClass(String value, String label) {
            this.value = value;
            this.label = label;
        }
    }
}