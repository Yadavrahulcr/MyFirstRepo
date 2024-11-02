import { LightningElement } from 'lwc';

export default class AcessingDomElementInHtml extends LightningElement {
     mankuj = ['cute', 'smart', 'my baby'];
     // lets try an other array here so that we could completly understand the consept foreach loop 

     faimly=[
        {
            name : 'papa' ,
            age : 55 ,
        },
        {
            name : 'maa' ,
            age : 50 ,
        }
            
     ]

    clickhandler(){
       let  elem= this.template.querySelector('h1')
       let manku = this .template.querySelectorAll('.mankudetails')// this will return a node
       let fami=this.template.querySelectorAll('.fam')
        console.log(elem.innerHTML)
         //console.log(arry.from(fami))
        Array.from(manku).forEach(item => {
            console.log(item.innerText)
        });
          // this is not running because we are not sure that how to extract and console an a element from node list 
    //    Array.from(fami).forEach(ob => {
    //      console.log(ob.name.innerText)
    //      console.log(ob.age.innerText)
    //    }); 
           // lwc:dom='manual';
           let childe= this.template.querySelector('.child')
         childe.innerHTML= '<p> i am commimn progamataically from js file </p>'
    }
}