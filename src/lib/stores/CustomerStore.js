import { get, writable } from 'svelte/store';
import { user } from '$lib/stores/UserStore'
import { currentOrg } from '$lib/stores/OrgStore.js';

const formElements = [
    { id: 'id', value: '#ID' },
    { id: 'customerName', value: 'Customer Name', icon: 'uil uil-user' },
    { id: 'mobNo', value: 'Mob no', icon: 'la la-mobile' },
    { id: 'email', value: 'Email', icon: 'uil uil-envelope' },
    { id: 'panId', value: 'Pan Id', icon: 'la la-address-card' },
    { id: 'aadhaarNo', value: 'Aadhaaar No', icon: 'la la-address-card' },
];

let CUSTOMER = {

    id: '',
    customerName: '',
    mobNo: '',
    email: '',
    panId: '',
    aadhaarNo: '',
}

export const customers = writable([]);

// Setting sample customers initially
for (var i = 0; i < 5; i++) {

    addCustomer({
        id: '111',
        customerName: 'test-user-' + i,
        mobNo: '98098',
        email: 'ssfg',
        panId: 'PANID',
        aadhaarNo: '*(&&^&989789',
    })
}

function addCustomer(newCustomer) {

    newCustomer.id = crypto.randomUUID()
    newCustomer.userId = get(user).userId,
    newCustomer.orgId = get(currentOrg).orgId // Modified store
    newCustomer.createdAt = Date.now()

    newCustomer = { ...CUSTOMER, ...newCustomer }
    customers.set([...get(customers), newCustomer]);
}

const getCustomers = (orgId) => {

    return get(customers).filter((newCustomer) => { newCustomer.orgId === orgId })
}

function getCustomerById(id) {

    return get(customers).find((newCustomer) => newCustomer.id == id)
  }


const reset = () => {
    customers.set([]);
};

export default {
    formElements,
    customers,
    addCustomer,
    reset,
    getCustomerById
}