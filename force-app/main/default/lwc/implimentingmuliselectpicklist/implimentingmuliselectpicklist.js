import { LightningElement,wire,api,track } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import ID_FIELD from "@salesforce/schema/Account.Id";
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import { getRecord, getFieldValue, updateRecord } from "lightning/uiRecordApi";

const fields = [INDUSTRY_FIELD];

export default class Implimentingmuliselectpicklist extends LightningElement {

    @track options;
    accountId='001Ie0000030RyPIAU'
    @wire(getRecord, { recordId: '$accountId', fields: [INDUSTRY_FIELD] })
    account;

    @wire(getPicklistValues, { 
        recordTypeId: '012000000000000AAA', fieldApiName: INDUSTRY_FIELD 
    })
    picklistResults({ error, data }) {
        console.log('picklistResults '+data);
        if (data) {
            console.log('this data '+JSON.stringify(data,null,2))

            this.options = data.values.map(opt => {return {"label": opt.label, "value": opt.value}});
            this.template.querySelector('[role="cm-picklist"]').setOptions(this.options);
           this.template.querySelector('[role="cm-picklist"]').setSelectedList(getFieldValue(this.account.data, INDUSTRY_FIELD));
           
        }

    }   
    
    handleSave(){
        let testvalue=this.template.querySelector('[role="cm-picklist"]').getSelectedList();
           console.log('testvalue '+testvalue);

    }

    output(event){
        console.log('event '+event.detail);
    }
}