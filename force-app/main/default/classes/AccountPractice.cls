public with sharing class AccountPractice {
   
    public static void updateAccount(String acctId){
        Account acc=  [Select Id,Name from Account Where Id =: acctId LIMIT 1];
        acc.name = acc.Name+ '-TestClass';
        update acc;
    }

    public static void getParam(string name){
        string newName;
        if(name == 'Rahul'){
            newName = name + '-Rah';
        }
        else{
            newName = name;
        }
    }
}