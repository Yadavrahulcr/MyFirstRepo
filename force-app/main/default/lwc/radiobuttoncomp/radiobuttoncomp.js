import { LightningElement } from 'lwc';

export default class Radiobuttoncomp extends LightningElement {


    value1 = '';
    value='';

    get options() {
        return [
            { label: 'Sales', value: 'option - £abc' },
            { label: 'Force', value: 'option - £bcd' },
        ];
    }

    get options1() {
        return [
            { label: 'Sales', value: 'option - £efg ' },
            { label: 'Force', value: 'option - £ijk' },
        ];
    }

  

    changehandler(event){
      console.log(event.target.value);

      const input = event.target.value;

        const v= input.split(' - £');
        console.log(v[0]);
        console.log(v[1]);
    }


}