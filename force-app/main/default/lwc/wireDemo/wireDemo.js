//lwc component uses @ wire in the javaScript class to read data from one of the wire adapters 
// in the lightning/ui*Api
// import {adapterId} from 'adapterModule'; 
// @wire(dapterId, {adapterconfig})
// property or function

import { LightningElement ,wire} from 'lwc';
import Id from '@salesforce/user/Id'
import{getRecord} from 'lightning/uiRecordApi'
export default class WireDemo extends LightningElement {
    userId = Id
    userdetail
    //0052t000001JKxPAAWP
    // syntax of wire adapter to get data based on user id
    // @wire(adapter,{adapterConfig}) but we need import the adapter first up*Api
    // property or function 
    @wire(getRecord,{recordId:'0052t000001JKxPAAW',fields:['User.Name','User.Email']})
        // userDetailshandler(response){
        //     console.log(response)
        //   // the above code was written to cheak what kind of data is comming from from the wire call
        // }

        // now we will try to extract data and   print it on the html
      
        userDetailsFromWireCall({data,error}){
          //console.log(response)
            if(data){
                this.userdetail=data.fields
               
            }
            if(error){
                console.error(error)
            }
        }
           // wire as a property 

           @wire(getRecord,{recordId:'0052t000001JKxPAAW',fields:['User.Name','User.Email']})
           userDetailAsProprty

           @wire(getRecord,{recordId:'$userId',fields:['User.Name','User.Email']})  // did this to cheak wire is reactive property
           userDetailAsReactiveProperty
           }