// import { LightningElement,wire,track } from 'lwc';
// import StockDetails from '@salesforce/apex/GetInventoryStock.StockDetails'
// const columns=[
//      {label:'Product Code' ,  fieldName:'Product_Code__c'},
//      {label:'HSN CODE' ,  fieldName:'HSN_Code__c'},
//      {label:'Product Name' ,  fieldName:'Proname'},
//      {label:'Net Quantity' ,  fieldName:'Net_Quantity__c'},
//      {label:'Batch Number' ,  fieldName:'Batch_Number__c'},
//      {label:'Expiry Date' ,  fieldName:'Expiry_Date__c',type:Date},
//      {label:'Net Expired Quantity' ,  fieldName:'Expired_Quantity__c' ,type:Number},
//      {label:'Site Name' ,  fieldName:'Psite'},
//      {label:'Warehouse Name' ,  fieldName:'Warehouse'},
//      {label:'Storage Location Name' ,  fieldName:'storage'}


// ]
// export default class GetInventoryStock extends LightningElement {


// // START OF THE FUNCTIONAL DATA 

//      @track columns =columns
//      @track wiredData =[];
//      @track intialdata 
//      @track searchKey;
//      @track error
//      @track itemSeach = true;
//      @track globlSearch= false;
//      transformedArray


//     @wire(StockDetails)
//     stock({data,error})
//     {
//           if(data)
//         {
//           //  console.log(data);
            
           
//             this.error= undefined;
//              this.transformdata (data)

//         }
//         else if(error)
//         {
//             this.error=error;
//             this.wiredData = undefined;
//         }

        
//     }






//     transformdata(data){

      
//       const transformData = data;
//       this.transformedArray=  transformData.map((object,index)=>{
//         const Proname = object.Product__r ? object.Product__r.Name : null;
//         const Psite = object.Plant_Site_Location__r ? object.Plant_Site_Location__r.Name : null;
//         const Warehouse = object.Warehouse_Location__r ? object.Warehouse_Location__r.Name : null;
//         const storage = object.Storage_Location__r ? object.Storage_Location__r.Name : null;
//         // const Batch_Number__c = object.Batch_Number__c
//         //const number = 112233
//         // const bno=''

//         //  if(object.Batch_Number_Flow__c){
//         //   this.bno= '1111'

//         // }
//         // else
//         // this.bno ='aaa'



        
        
//          return { ...object,
//         Proname, 
//         Psite ,Warehouse,storage,  }
       
             
      
//       })

//        console.log( this.transformedArray);
//        this.wiredData=this.transformedArray;
//        this.intialdata = this.transformedArray;

//     }

















//     handleSearch1(event)
//     {

//      this.itemSeach = false;
//      this. globlSearch= true;
//        this. searchKey = event.target.value.toLowerCase();
//           if(this.searchKey)
//           {
//             this.wiredData=this.intialdata
            
//               if(this.wiredData)
//               {
//                 let seachRecords=[]
                  
//                 for(let record of this.wiredData)
//                    {
//                      let valuesArray = Object.values(record)

//                      for(let val of valuesArray)
//                      {
//                       // console.log('---->'+val)
//                         let strval = String(val)

//                          if(strval)
//                          {
//                              if(strval.toLocaleLowerCase().includes(this.searchKey))
//                              {
//                                 seachRecords.push(record);
//                                 break
//                              }
//                          }
//                      }
//                    }

//                   // console.log('matched records', JSON.stringify(seachRecords));
//                    this.wiredData = seachRecords;
//                 }
                 
              
//               }


//               else{
//                 this.wiredData = this.intialdata
//           }


//     }

// //     // END OF THE FUNCTIONAL DATA 




// ////////////////////////////////////////////////////////////////////////////////
      
// //   @track  keyvaluepair={}
// // @track arrayvalue=[]
// //    // Psiteset=[]
// //   @track  fresult=[]
// //   @track transformData
// //   @track xyz
   

// //    @track wrData

// //     @wire(StockDetails)
// //     stock({data,error})
// //     {
// //           if(data)
// //         {
// //           //  console.log( JSON.stringify(data));
// //            this.wrData=data;

// //           this. transformdata(data)
            
           
// //             this.error= undefined;
// //             //  this.transformdata (data)

// //         }
// //         else if(error)
// //         {
// //             this.error=error;
// //             this.wiredData = undefined;
// //         }
           
      

        
// //     }
  
// //     transformdata(data){
// //       if(data)
// //        console.log(data);
            
              
// //       this. transformData = data;
// //       this.  xyz = this.transformData.map((object,index)=>{
// //         const Proname = object.Product__r ? object.Product__r.Name : "-";
// //         const Psite = object.Plant_Site_Location__r ? object.Plant_Site_Location__r.Name :"-";
// //         const Warehouse = object.Warehouse_Location__r ? object.Warehouse_Location__r.Name :"-";
// //         const storage = object.Storage_Location__r ? object.Storage_Location__r.Name : "-"
// //         const batchnumberfinal= object.Batch_Number_Flow__c?object.Batch_Number_Flow__c:object.Batch_Number__c
// //         const expiryDatefinal=object.Expired_Quantity__c?object.Expired_Quantity__c:'-'
        
       
        


// //          return { ...object,
// //         Proname, 
// //         Psite ,Warehouse,storage,batchnumberfinal, expiryDatefinal }
       
// //       })

// //        console.log(this.xyz );









     

    

    
// //    this. xyz.forEach(record=>{
// //       const pname= record.Product__r.Name
     
// //       // if(record.Psite!=='-'&& !this.Psiteset.includes(record.Psite)){
// //       //   this.Psiteset.push(record.Psite)
// //       // }
// //       //console.log(this.Psiteset)

// //       if(!this.keyvaluepair[pname]){
// //         this.keyvaluepair[pname]=[]


// //       }
// //       this.keyvaluepair[pname].push(record);

// //       })
// //   console.log(this.keyvaluepair)

       








// //   this. arrayvalue = Object.entries(this.keyvaluepair).map(([productName, productData]) => ({
// //     productName,
// //     productData
   
    
  

// // }));


// //  console.log('vv',this.arrayvalue)
// // // console.log(JSON.stringify(this.arrayvalue))


 
// //  this.arrayvalue.forEach(category => {
// //      let psite = {};
// //      let whouse = {};
// //      let total = 0;
// //      category.productData.forEach(product => {
// //          if (product.Psite !== "-" && product.Psite) {
// //              if (product.Psite in psite) {
// //                  psite[product.Psite] += product.Net_Quantity__c;
// //              } else {
// //               psite[product.Psite] = { name: product.Psite, qty: product.Net_Quantity__c };
// //              }
// //          }
// //          if (product.Warehouse !== "-" && product.Warehouse) {
// //              if (product.Warehouse in whouse) {
// //                  whouse[product.Warehouse] += product.Net_Quantity__c;
                 
// //              } else {
// //               whouse[product.Warehouse] = { name: product.Warehouse, qty: product.Net_Quantity__c };
// //              }
// //          }
// //          total += product.Net_Quantity__c;
// //      });
// //      this.fresult.push({
// //          ...category,
// //          psite: Object.values(psite),
// //          whouse: Object.values(whouse),
// //          total

// //      });
    
// //  });
 
// //  console.log(this.fresult)






  
// // }
// ///////////////////////////////////////////////////////////////

//     @track keyvaluepair = {};
//     @track arrayvalue = [];
//     @track fresult = [];
//     @track wiredData2 =[];
//      @track intialdata2 
//     @track searchKey2;



//     @wire(StockDetails)
//     wiredStock({ data, error }) {
//         if (data) {
//             this.transformData(data);
//         } else if (error) {
//             console.error('Error retrieving stock details:', error);
//         }
//     }

//     transformData(data) {
//         this.arrayvalue = [];
//         this.fresult = [];

//         data.forEach(record => {
//             const Proname = record.Product__r ? record.Product__r.Name : "-";
//             const Psite = record.Plant_Site_Location__r ? record.Plant_Site_Location__r.Name : "-";
//             const Warehouse = record.Warehouse_Location__r ? record.Warehouse_Location__r.Name : "-";
//             const storage = record.Storage_Location__r ? record.Storage_Location__r.Name : "-";
//             const batchnumberfinal = record.Batch_Number_Flow__c ? record.Batch_Number_Flow__c : record.Batch_Number__c;
//             const expiryDatefinal = record.Expired_Quantity__c ? record.Expired_Quantity__c : '-';

//             if (!this.keyvaluepair[Proname]) {
//                 this.keyvaluepair[Proname] = [];
//             }
//             this.keyvaluepair[Proname].push({
//                 ...record,
//                 Proname,
//                 Psite,
//                 Warehouse,
//                 storage,
//                 batchnumberfinal,
//                 expiryDatefinal
//             });
//         });

//         this.arrayvalue = Object.entries(this.keyvaluepair).map(([productName, productData]) => ({
//             productName,
//             productData
//         }));

//         this.arrayvalue.forEach(category => {
//             let psite = {};
//             let whouse = {};
//             let total = 0;

//             category.productData.forEach(product => {
//                 if (product.Psite !== "-" && product.Psite) {
//                     psite[product.Psite] = (psite[product.Psite] || 0) + product.Net_Quantity__c;
//                 }
//                 if (product.Warehouse !== "-" && product.Warehouse) {
//                     whouse[product.Warehouse] = (whouse[product.Warehouse] || 0) + product.Net_Quantity__c;
//                 }
//                 total += product.Net_Quantity__c;
//             });

//             this.fresult.push({
//                 ...category,
//                 psite: Object.entries(psite).map(([name, qty]) => ({ name, qty })),
//                 whouse: Object.entries(whouse).map(([name, qty]) => ({ name, qty })),
//                 total
//             });
//         });
//            this.wiredData2=this.fresult
//           this.intialdata2= this.fresult

//     }


//     handleSearch(event)
//         {
//             this.globlSearch=false;
//             this.itemSeach=true;
//            this. searchKey2 = event.target.value.toLowerCase();
//               if(this.searchKey2)
//               {
//                 this.wiredData2=this.intialdata2
                
//                   if(this.wiredData2)
//                   {
//                     let seachRecords=[]
                      
//                     for(let record of this.wiredData2)
//                        {
//                          let valuesArray = Object.values(record)
    
//                          for(let val of valuesArray)
//                          {
//                           // console.log('---->'+val)
//                             let strval = String(val)
    
//                              if(strval)
//                              {
//                                  if(strval.toLocaleLowerCase().includes(this.searchKey2))
//                                  {
//                                     seachRecords.push(record);
//                                     break
//                                  }
//                              }
//                          }
//                        }
    
//                       // console.log('matched records', JSON.stringify(seachRecords));
//                        this.wiredData2 = seachRecords;
//                     }
                     
                  
//                   }
    
    
//                   else{
//                     this.wiredData2 = this.intialdata2
//               }
    
    
//         }
    















// }