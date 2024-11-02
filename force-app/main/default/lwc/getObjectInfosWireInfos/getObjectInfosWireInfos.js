// getObjectInfos
// it is used to get metadata of multipe objects . the response includes metadata of 
// the fields , child relationships , record type , and theme for each object.

import { LightningElement,wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'
import{getObjectInfos} from 'lightning/uiObjectInfoApi'
export default class GetObjectInfosWireInfos extends LightningElement {
    objsdata
   @wire(getObjectInfos,{objectApiNames:[ACCOUNT_OBJECT,OPPORTUNITY_OBJECT]})
   objInfosAccOpp({data,error}){
    if(data){
        this.objsdata=data.results
        //console.log( this.objsdata)
    }
    if(error){
        console.error(error)
    }
        
   }
}