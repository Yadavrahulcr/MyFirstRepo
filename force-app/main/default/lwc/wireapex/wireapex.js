import { LightningElement ,wire} from 'lwc';
import apexmethod from '@salesforce/apex/wireanapex.apexmethod'
// import getcon from '@salesforce/apex/wireanapex.getcon'
// import filteredacc from '@salesforce/apex/wireanapex.filteredacc'
export default class Wireapex extends LightningElement {
//     selectedindustry=''
//   @wire(filteredacc,{Industry:'$selectedindustry'})
//   filteredacc

//   get indoption(){
//    return [
//      {label:'manufacturing' ,value:'manufacturing'},
//      {label:'none' ,value:''}

//    ]

//   }
//   changehand(event){
//      this.selectedindustry=event.target.value
//   }


accouts

//handleclick(){
    // apexmethod().then((result)=>{
    //     this.accouts=result
    // }).catch((error)=>{
    //     console.error(error)
    // })
    searchkey=""
    searchh(event){
        this.searchkey=event.target.value
        apexmethod({searchkey:this.searchkey}).then((result)=>{
            this.accouts=result
        }).catch((error)=>{
            console.error(error)
        })
    }

  
}