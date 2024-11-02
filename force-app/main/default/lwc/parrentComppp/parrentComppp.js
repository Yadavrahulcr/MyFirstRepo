import { LightningElement } from 'lwc';

export default class ParrentComppp extends LightningElement {

    myname = 'rahul'
    pers=10
    childcompProverty
    hitchildsmethod(){
        console.log('this method is called')
        this.template.querySelector('c-chillddcomp').childmethod();
    }

    // changeHandler(event) {
    //     this[event.target.name] = event.target.value <= 100 ? event.target.value : 100;
    // }

    eventfromchild(event){
        console.log('mmmmssjfdsldjfsjdflk')
        console.log (JSON.stringify(event))
    }

    directevent(event){
        console.log(JSON.stringify(event));
    }

    gcmethod(event){
        //console.log(JSON.stringify(event))
        //
        console.log('gc mc called ');
        console.log(event.detail.value)
    }


    userDetails = [
        {
            name: 'John Doe',
            title: 'CEO & Founder',
            company: 'Harvard University, example',
            buttontext: 'Contact',
            imageUrl: 'https://www.w3schools.com/w3images/team1.jpg'
        },
        {
            name: 'Steve Smith',
            title: 'CEO & Founder',
            company: 'Standford University, example',
            buttontext: 'Contact',
            imageUrl: 'https://www.w3schools.com/w3images/team2.jpg'
        },
        {
            name: 'David Warner',
            title: 'CEO & Founder',
            company: 'Sydney University, example',
            buttontext: 'Contact',
            imageUrl: 'https://www.w3schools.com/w3images/team3.jpg'
        },
        {
            name: 'Peter Parker',
            title: 'CEO & Founder',
            company: 'Melbourne University, example',
            buttontext: 'Contact',
            imageUrl: 'https://www.w3schools.com/w3images/team4.jpg'
        }

    ]



}