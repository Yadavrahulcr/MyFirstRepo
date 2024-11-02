import { LightningElement } from 'lwc';

export default class Parentcomp extends LightningElement {

    carousaldd=[
        {
      scr:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
      header :'card 1',
      description : '1st disc'
        },
        {
            scr:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header :'card 2',
            description : '2nd disc'
              },
    
              {
                scr:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
                header :'card 3',
                description : '3rd disc'
                  }
    ]
    percentage=10
    handler(event){
        this.percentage=event.target.value
    }
    handleClick11(){
       this.template.querySelector('c-parent2child-methodcom').resethandle()
     }

}