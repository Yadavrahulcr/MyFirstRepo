import { LightningElement } from 'lwc';
import somebigdataset from '@salesforce/apex/infinteloading.somebigdataset'

const columns = [
    {label:  'Id', fieldName : 'Id'},
    {label:  'Name', fieldName : 'Name'},
    {label:  'Industry', fieldName : 'Industry'}
]



export default class Infineloadingwithdatatable extends LightningElement {



    accounts=[]
    columns= columns
    rowsize=50;
    rowoffset=0
    enableinfineloading=false

    connectedCallback(){
        this.loadData();
    }
     



    async loadData(){
       try{

         let response = await somebigdataset({limitsize:this.rowsize, offset:this.rowoffset});
         if(response)
            this.accounts = [...this.accounts, ...response]
           console.log(this.accounts)
           this.enableinfineloading=(response.length==this.rowsize||response.length!=0)
       }
       catch (error){
        console.log('somthing went worong '+error)
       }

    }
    
    async loadmorehandler(event){
        let target = event.target;
        target.isLoading = true;

        this.rowoffset=this.rowoffset+this.rowsize
        await this.loadData(); 

        target.isLoading=false;

    }


}