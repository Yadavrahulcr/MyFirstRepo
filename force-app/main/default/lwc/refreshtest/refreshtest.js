import { LightningElement, wire, track } from 'lwc';
import refreshtestmethod from '@salesforce/apex/refreshTest.refreshtestmethod'
export default class Refreshtest extends LightningElement {

    @wire(refreshtestmethod)
    wireoutput(data) {
        if (data)
            console.log(data)

    }


}