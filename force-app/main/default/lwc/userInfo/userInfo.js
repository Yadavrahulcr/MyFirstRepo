import { LightningElement } from 'lwc';
import ID from '@salesforce/user/Id'
import IS_GUEST from '@salesforce/user/isGuest'
export default class UserInfo extends LightningElement {
    userId=ID
    isguest=IS_GUEST
}