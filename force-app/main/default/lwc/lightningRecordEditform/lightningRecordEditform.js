import { LightningElement } from 'lwc';
import Contact from '@salesforce/schema/Contact';
import Name from '@salesforce/schema/Contact.Name';
import Email from '@salesforce/schema/Contact.Email';
import AccountId from '@salesforce/schema/Contact.AccountId'
import LastName from '@salesforce/schema/Contact.LastName';

export default class LightningRecordEditform extends LightningElement {
    objectName = Contact
    
     filds={
        email:Email,
        accountId :AccountId,
       lastname : LastName,
       name:Name
     }
     resethandler(){
        const resetitems=this.template.querySelectorAll('lightning-input-field')
        console.log(resetitems)
        if(resetitems){
            
        Array.from(resetitems).forEach(item=>{
            item.reset()
        })
        }

     }
    }