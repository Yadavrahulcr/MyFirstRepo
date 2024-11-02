import { LightningElement ,wire,api} from 'lwc';
import{getRecord} from 'lightning/uiRecordApi';
import{getPicklistValues} from 'lightning/uiObjectInfoApi'
import{getObjectInfos}from 'lightning/uiObjectInfoApi'
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import CONTACT_NAME from '@salesforce/schema/Contact.Name';
export default class GetRecord extends LightningElement {
    @api recordId
    
    @wire(getRecord ,{recordId:'0012y00000L5R6jAAF',fields:[CONTACT_NAME,ACCOUNT_NAME]})
     data;

    @wire(getObjectInfos,{objectApiName:CONTACT_OBJECT})
    objectinfo ;
    @wire(getPicklistValues,{recordTypeId:$recordTypeId,filedApiName:CONTACT_NAME})
    value
    
}
