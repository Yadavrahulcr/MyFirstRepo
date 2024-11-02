@IsTest
public with sharing class AccountPracticeTest {
    
    @IsTest
    public static void updateAccountTest(){
        Account acc =new Account();
        acc.Name = 'Rahul ABC';
        insert acc;

        AccountPractice.updateAccount(acc.Id);

    }

    @IsTest
    public static void getParamIfTest(){
         string name = 'Rahul';
        TEST.STARTTEST();
        AccountPractice.getParam(name);
        TEST.STOPTEST();
        

    }

    @IsTest
    public static void getParamElseTest(){
         string name = 'RahOMul';

        AccountPractice.getParam(name);

    }
}