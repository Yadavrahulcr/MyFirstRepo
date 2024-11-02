@istest
public class TestRahulClass {
@isTest
    static void testUpdatePhone() {
        // Create test Account with Phone field set to '7869706115'
        Account testAccount = new Account(Name = 'Test Account', Phone = '7869706115');
        insert testAccount;

        // Call the updatePhone method
        Test.startTest();
        rahulclass.updatePhone();
        Test.stopTest();

        // Query the updated Account
        Account updatedAccount = [SELECT Phone FROM Account WHERE Id = :testAccount.Id];

        // Verify that the Phone field has been updated to '7869706116'
        System.assertEquals('7869706116', updatedAccount.Phone);
    }
}