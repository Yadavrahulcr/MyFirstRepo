public with sharing class EmailUtility {
    public static void sendEmails(List<Id> lstId){
        List<Contact> conLst =[Select Id,Name ,Email,AccountId from Contact WHERE Id=:lstId];
        List<Messaging.SingleEmailMessage> mails = new List<Messaging.SingleEmailMessage>();
        EmailTemplate templateId = [Select id from EmailTemplate where name = 'MyfIrstVFTemplate' LIMIT 1];
        OrgWideEmailAddress owea = new OrgWideEmailAddress();
        owea = [SELECT Id, Address, DisplayName FROM 
OrgWideEmailAddress WHERE DisplayName='Sales Support'];
       

        for(Contact con :conLst){
            Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
            
            String[] toAddresses = new List<String>();
            toAddresses.add(con.Email);
            mail.setTemplateId(templateId.Id);
            mail.setOrgWideEmailAddressId(owea.Id);
            mail.setToAddresses(toAddresses);
            mail.setTargetObjectId(con.Id);
           mail.setWhatId(con.AccountId);
            mails.add(mail);    
        }

        Messaging.SendEmailResult[] results = Messaging.sendEmail(mails);

        for (Messaging.SendEmailResult res : results) {
            if (res.isSuccess()) {
                System.debug('Email sent successfully');
            }
            else {
                System.debug('The following errors occurred: ' + res.getErrors());                 
            }
        }
    }
}