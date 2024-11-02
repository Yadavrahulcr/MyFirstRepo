// apex method must static and either global or public
// method should be annotated with @Auraenabled 
// to import apex method use import syntex in java script to import an Apex method via
// the @salesforce/apex scoped packages 
// import apexMethodName from 'salesforce/apex/classname.apexmethodreferance
// to fetch data 
// syntax 
// @wire(apexMethodName,{apexMethodParams})
// property or function   
// if a parameter is null, the method will be called but , if the value is undefinned , the method isnt called


import { LightningElement ,wire} from 'lwc';
import getAccountList from '@salesforce/apex/apexLwcClass.getAccountList'
export default class Callingapexwithwire extends LightningElement {
acclist =[]
 @wire(getAccountList)
 accounts
 @wire(getAccountList)
 accAsfunc({data,error}){
    if(data){
        this.acclist=data.map(item=>{
            let newName = item.Name+'yadav'
             return {...item,newName}
        })
    }
 }
}