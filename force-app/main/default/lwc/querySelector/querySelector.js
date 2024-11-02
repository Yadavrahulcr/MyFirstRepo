import { LightningElement } from 'lwc';
export default class QuerySelector extends LightningElement {
         name = ['anju','nanju','monu','sonu']
    fetchhtml(){
         
        const element = this.template.querySelector('h1')
        element.style.border = '3px solid green';
        console.log(element.innerText)

        const namelist = this.template.querySelectorAll(".names")
        // the above code element will return the node list but we wish to convert node to array
        Array.from(namelist).forEach(element => {
            console.log(element.innerText)
            element.setAttribute("title", element.innerText )
           });

           // lwc:dom='manuall'

           const childelem = this.template.querySelector('.child')
           childelem.innerHTML = '<p>this a p tag from lwc:dom=manual</p>'
    }


}