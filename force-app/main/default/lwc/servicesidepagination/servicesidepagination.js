import { LightningElement } from 'lwc';
import clintsitdepagination from '@salesforce/apex/infinteloading.clintsitdepagination'

const columns = [
    {label:  'Id', fieldName : 'Id'},
    {label:  'Name', fieldName : 'Name'},
    {label:  'Industry', fieldName : 'Industry'}
]

export default class Servicesidepagination extends LightningElement {


    //  accounts=[]
    columns= columns
    records = [];
    // rowsize=50;
    // rowoffset=0
   
    // pagination properties

    pageSize = 10;
    pageNumber = 1;
    totalRecords = 0;
    enablePagination = true;
    isLoading = true;



connectedCallback(){
   this.loadData();
    }


async loadData(){
  
  
      await clintsitdepagination().then((result)=>{
        this.isLoading = false;
         console.log('testoutput',result);
        //  this.accounts=result;
          this.records = result
          //records = [];
         this.totalRecords=this.records.length;

      }).catch((error)=>{
        console.error(error);

      })   
     
}

get hasRecords() {
    return this.records.length > 0;
}

get showPaginator() {
    return this.enablePagination && this.hasRecords;
}

// WILL AUTOMATICALLY CALLED FROM PAGINATOR ON PAGE NUMBER OR SIZE CHANGE
paginationChangeHandler(event) {
    if (event.detail) {
        this.pageNumber = event.detail.pageNumber;
        this.pageSize = event.detail.pageSize;
    }
}


  // PAGINATION PROPERTY - CALCULATE AND RETURN RECORDS TO DISPLAY
  get recordsToDisplay() {
    let from = (this.pageNumber - 1) * this.pageSize,
        to = this.pageSize * this.pageNumber;
    return this.records?.slice(from, to);
}


}