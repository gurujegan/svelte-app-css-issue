import { get, writable } from 'svelte/store';
import { user } from '$lib/stores/UserStore'
import { currentOrg } from '$lib/stores/OrgStore.js';

const formElements = [
    { id: 'customerName', value: 'Customer Name' },
    { id: 'mobNo', value: 'Mob no' },
    { id: 'email', value: 'Email' },
    { id: 'panId', value: 'Pan Id' },
    { id: 'aadhaarNo', value: 'Aadhaaar No' },
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

// Setting sample org initially
for (var i = 0; i < 5; i++) {

    addCustomer({
        id: '111',
        customerName: 'LKLKL',
        mobNo: '98098',
        email: 'ssfg',
        panId: 'HJHHJ^&*',
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

const reset = () => {
    customers.set([]);
};

export default {
    formElements,
    customers,
    addCustomer,
    reset,
}