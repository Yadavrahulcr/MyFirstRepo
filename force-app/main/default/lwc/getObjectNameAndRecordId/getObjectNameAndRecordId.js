import { LightningElement ,api } from 'lwc';
export default class GetObjectNameAndRecordId extends LightningElement {
    @api recordId
    @api objectApiName
}