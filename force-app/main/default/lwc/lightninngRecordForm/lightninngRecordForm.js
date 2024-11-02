import { LightningElement,api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import ACCOUNT_OBJECT from '@salesforce/schema/Contact'
import NAME_FIELD from '@salesforce/schema/Contact.LastName'
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Contact.Phone'
import  TYPE_FIELD from '@salesforce/schema/Contact.Email'
import INDUSTRY_FIELD from '@salesforce/schema/Contact.FirstName'
export default class LightninngRecordForm extends LightningElement {
    objectName=ACCOUNT_OBJECT
    @api recordId
    @api objectApiName
    
    fieldList=[NAME_FIELD,ANNUAL_REVENUE_FIELD,TYPE_FIELD,INDUSTRY_FIELD]
    onsucesshandler(event){
        console.log(event.detail.id)
         const toastevent = new ShowToastEvent ({
              title:'Account created',
              message:'record created',
             variant:'success'
       })
         this.dispatchEvent(toastevent)
     }
}


// to work with the lightning record forms we need to 
// import referances from the object and fied referance in the js 

// sytax  
// import <objectname > from '@salesforce / schema / objectReference'
// import <fieldName > from '@salesforce / schema/object.fieldReference '
// note fields will be passed as array of string