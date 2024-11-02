import { LightningElement ,wire} from 'lwc';
import methodoftable from '@salesforce/apex/understandinddatatable.getaccdetails'
import methodofcontacttable from '@salesforce/apex/understandinddatatable.contcontdetails'

const columns=[
    {label :'NameOfAccount',fieldName:'Name'},
    {label:'NameofIndustry',fieldName:'Industry'}
]

const col=[
    {label:'accid',fieldName:'AccountId'},
    {label:'lastName',fieldName:'LastName'},
    {label:'phone',fieldName:'Phone'}
]

export default class Lightenindatatable extends LightningElement {
    accdata
    conrec
    columns=columns;
    col=col;

    

@wire(methodoftable)
accdetails({data,error}){
    if(data){
        console.log(data);
        this.accdata = data;
    }
    if(error){
        console.error(error)
    }
}

@wire(methodofcontacttable)
condetails({data,error}){
    if(data){
        console.log(data);
        this.conrec=data
    }
    // else if (result.error){
    //     console.error(result.error)
    // }
}


}