import { LightningElement } from 'lwc';
import hasPermissionViewAll from '@salesforce/userPermission/ViewAllData'
export default class CheakUserPermission extends LightningElement {
    get hassPermissionViewAll(){
        return hasPermissionViewAll
    }
}