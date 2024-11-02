import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import INDUSTRY from '@salesforce/schema/Account.Industry';
export default class LightningEditFormCustomValidation extends LightningElement {
 objectName = ACCOUNT_OBJECT   
 field={
    indusrtry:INDUSTRY
 }              
 
handlesubmit(event){
    event.preventDefault()
    const inputCmp = this.template.querySelector('lightning-input')
    const value= inputCmp.value
    if(!value.includes('manku')){
        inputCmp.setCustomValidity('the account name must include manku')
         }    
         else {
            inputCmp.setCustomValidity("")
            const fields = event.detail.fields
            fields.Name = value
            this.template.querySelector('lightning-record-edit-form').submit(fields)
          }
          inputCmp.reportValidity()
         

}  
successHandler(event){
       const toastEvent = new ShowToastEvent({
         title:"account created successfully",
         message:'RecordId',
        variant:'success'    
     })
       this.dispatchEvent(toastEvent)
    }
    handleError(event){ 
        const toastEvent = new ShowToastEvent({ 
            title:"Error creating Account",
            message: event.detail.message,
            variant:"error"
        })
        this.dispatchEvent(toastEvent)
    }

     
    


}