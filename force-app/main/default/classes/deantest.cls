public with sharing class deantest {
    public static list<account>getacc(string name){
        string key = name;
        return [select id,name from Account where name like :'%key' limit 5];

    }

    }