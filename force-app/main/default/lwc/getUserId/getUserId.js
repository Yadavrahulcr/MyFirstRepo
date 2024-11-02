import { LightningElement } from 'lwc';
import ID from '@salesforce/user/Id';
import IS_GUEST from '@salesforce/user/isGuest';
export default class GetUserId extends LightningElement {
    userid=ID
    is_guest =IS_GUEST
}