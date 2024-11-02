// getPicklistvalues is used to get picklist values from a specific field
// imports
//  import{getPickListValues} from 'lightning/uiObjectInfoApi
// @wire(getPickListValues,{recordTypeId:'' ,fieldApiName:INDUSTRY_FIELD})

import { LightningElement ,wire} from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import{getPicklistValues,getObjectInfo} from 'lightning/uiObjectInfoApi'
export default class GetPickListValues extends LightningElement {
      @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
      rectyp
      @wire(getPicklistValues,{recordTypeId:'$rectyp.data.defaultRecordTypeId', fieldApiName:INDUSTRY_FIELD})
      indpicklist({data,error}){
        if(data){
            console.log(data)
            this.industryOptions=[...this.generatePicklist(data)]
        }
        if(error){
            console.error(error)
        }
      }
      
      selectedIndustry="";
      industryOptions=[]

     // get options() {
        //   return [
        //       { label: 'New', value: 'new' },
        //       { label: 'In Progress', value: 'inProgress' },
        //       { label: 'Finished', value: 'finished' },
        //   ];
          
        //}
        generatePicklist(data){
            return data.values.map(item=>({label: item.label, value: item.value}))

        }
        handleChange(event) {
            this.selectedIndustry = event.detail.value;
    }
}