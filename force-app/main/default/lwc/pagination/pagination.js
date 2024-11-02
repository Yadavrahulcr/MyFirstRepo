import { LightningElement ,wire } from 'lwc';
import getcontact from '@salesforce/apex/navminingControler.getcontact'
export default class Pagination extends LightningElement {
    
   @ wire(getcontact)
    wireddata({data,error}){
      if(data){
        console.log(data);
      }
     if(error){
        console.error(error)
      }
    }


}