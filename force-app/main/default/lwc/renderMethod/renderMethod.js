import { LightningElement } from 'lwc';
import signin from './signin.html'
import sighnup from './sighnup.html'
import renderMethod from './renderMethod.html'
export default class RenderMethod extends LightningElement {
    presentstate = ''
  render(){
    return this.presentstate ==='signup'? sighnup :
           this.presentstate === 'signin'? signin :
           renderMethod
  }

  handleClick(event){
    this.presentstate=event.target.label
    

  }
  sucessclick(event){
    console.log(`${event.target.label} sucessfully`)
  }
}