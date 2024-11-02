import { LightningElement,wire } from 'lwc';
import { getPicklistValues,getObjectInfo } from 'lightning/uiObjectInfoApi';
import Account_OBJECT from '@salesforce/schema/Account';
import RATING_FIELD from '@salesforce/schema/Account.Rating'
export default class Picklistvalue extends LightningElement {
    
    rectypeId
    options=[]
    value
    cheakvalue=true;
    

    @wire(getObjectInfo, { objectApiName: Account_OBJECT })
     wiredresult({data, error }){
        if(data){
            console.log('picklistvalues'+JSON.stringify(data,null,2));
            this.rectypeId = data.defaultRecordTypeId;
            console.log(this.rectypeId);            
        }
        if(error){
            console.error(error);
        }
     }


//      @wire(getPicklistValues, { recordTypeId: particularRecordTypeIdFromName, 
//         fieldApiName: level_field
// })levelPicklistValues; 


@wire (getPicklistValues,{recordTypeId:'$rectypeId',fieldApiName:RATING_FIELD})
picklistvalue({data,error}){
    if(data){
        console.log(JSON.stringify(data,null,3));
        const values= data.values;

        values.forEach((item,index) => {
           this.options.push({label:item.value,value:item.value})
            
        });
        this.cheakvalue=false;

        console.log('options'+JSON.stringify(this.options,null,2))
    }
    if(error){
        console.error(error)
    }
}


handleChange(event){
    this.value=event.detail.value;
}

}