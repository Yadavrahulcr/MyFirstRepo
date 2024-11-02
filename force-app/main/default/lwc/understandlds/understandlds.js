import { LightningElement,api } from 'lwc';
// we need to import the fields while using record edit form and we we wish to show only specific fields on the ui
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import NameField from'@salesforce/schema/Account.Name'
import industryField  from'@salesforce/schema/Account.Industry'
import AnnualRevenaueField from'@salesforce/schema/Account.AnnualRevenue'
export default class Understandlds extends LightningElement {
    @api recordId
    @api objectApiName

     fields =[NameField,industryField,AnnualRevenaueField] // the value are passed as array remmember this
}