import { LightningElement } from 'lwc';
 import accounttype from '@salesforce/apex/apexaccountrecord.accounttype';
 const columns1=[
    {label:'MembersName',fieldName:'name'},
    {label:'Age',fieldName:'age'},
    {label:'SEX',fieldName:'sex'}
 ]
 const columns=[
    {label:'Name',fieldName:'Name'},
    {label:'Industry',fieldName:'Industry'},
 ]

export default class Accountdetailsfromapex extends LightningElement {
    keye='';
    accounts
    columns=columns;
    col=columns1

    faimly =[
        { name:'rahul',age:33,sex:'M'},
        { name:'manku',age:3,sex:'M'},
        { name:'nanopai',age:30,sex:'F'}
    ]
     

    inputdasler(event){
        this.keye = event.target.value;
    
        accounttype({name:this.keye}).then((result)=>{
        this.accounts=result
        console.log(this.accounts);
    }).catch((error)=>{console.error(error)})
}
}