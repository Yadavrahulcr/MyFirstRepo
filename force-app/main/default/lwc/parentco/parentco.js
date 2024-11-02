import { LightningElement,api } from 'lwc';

export default class Parentco extends LightningElement {
    message = 'hi am from parent component'
    objectData=[
        {
        src :"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
        header :"First Card",
        description :"1s description."
       },
        {
        src :"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
        header :" 2nd Card",
        description :"3rd description."
       },
        {
        src :"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
        header :"3rd Card",
        description :" 3rd description."
    }
]

percentagevalue=10
percentage(event)
{
 this.percentagevalue=event.target.value

}

clickhandler(){
    this.template.querySelector('c-p2c-via-method').reset()

}
       
        

}