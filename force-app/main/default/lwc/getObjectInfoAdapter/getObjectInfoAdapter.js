import { LightningElement ,wire} from 'lwc';
import{getObjectInfo} from 'lightning/uiObjectInfoApi'
// the above adaptar is used to get matadata about a specific Object .The 
// response include metadata describing the object's fields ,child relationship, 
// record type and the theme 
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class GetObjectInfoAdapter extends LightningElement {
    DefaultRecordTypeId
    objectapiName
@wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
 objectInfo({data,error}){
    if(data){
       this.DefaultRecordTypeId=data.defaultRecordTypeId
       this. objectapiName=data.apiName
    }
    if(error){
        console.log(error)
    }
     
 }
  // lets see wire as property 
   @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
   accountObjectInfoProperty
}