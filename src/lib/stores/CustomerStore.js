import { writable } from 'svelte/store';

let CUSTOMER = { id: '', customerName: '', mobNo: '', email: '', panId: '' };

export const newCustomer = writable([]);

function addNewCustomer(CUSTOMER) {
    debugger
    newCustomer.set([...$newCustomer, CUSTOMER]);
    CUSTOMER = {  id: '', customerName: '', mobNo: '', email: '', panId: ''  };
}

export default{

    addNewCustomer,CUSTOMER
}