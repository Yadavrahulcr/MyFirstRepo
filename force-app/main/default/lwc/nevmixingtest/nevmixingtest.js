import { LightningElement,wire,api } from 'lwc';
import getAccontrecord from '@salesforce/apex/navminingControler.getAccontrecord'
import {NavigationMixin} from 'lightning/navigation'
const columns = [

    {label:'Name',fieldName:'Name' },
    {label:'Email',fieldName:'Email',type:'email'},
    {label:'Phone',fieldName:'Phone',type:'phone'},
    {
        label: 'Input Text',
        fieldName: 'inputText',
        type: 'custom',
        typeAttributes: {
            inputType: 'text'
        },
        editable: true,
        cellAttributes: { alignment: 'left' }
    }
]

export default class Nevmixingtest extends NavigationMixin(LightningElement) {
@api recordId
contactdata=[];
columns = columns;
SelectedRecordId
rec
@wire(getAccontrecord,{recordId:'$recordId'})
accountrec({data,error}){
    if(data){
        console.log(data)
      this.contactdata=data;
    }
    if(error){
      console.error(error)

    }
}
onselecthandler(event){
  
    console.log(event);
 this.SelectedRecordId= event.detail.selectedRows
 if(this.SelectedRecordId.length===1){
 const recid = this.SelectedRecordId
 console.log(recid[0].Id)
 this.rec= recid[0].Id;
 console.log (this.rec)
 this.nevagatetoRecordPageInEditMode();
}}

nevagatetoRecordPageInEditMode(){
    // this[NavigationMixin.Navigate]({
    //     type: 'standard__recordPage',
    //     attributes: {
    //         recordId: this.selectedRecordId,
    //         objectApiName: 'Your_Object_API_Name', // Replace with the API name of your object
    //         actionName: 'view'
    //     }
    // });

    if (this.rec) {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.rec,
                objectApiName: 'Contact',
                actionName: 'view'
            }
        });
    }
}


}