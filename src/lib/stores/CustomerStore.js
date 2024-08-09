import { get, writable } from 'svelte/store';
import { user } from '$lib/stores/UserStore'
import { currentOrg } from '$lib/stores/OrgStore.js';

let CUSTOMER = {

    id: '',
    customerName: '',
    mobNo: '',
    email: '',
    panId: '',
    userId: get(user).userId,
    createdAt: '',
    updatedAt: '',
}

export const customers = writable([]);

const addCustomer = (newCustomer) => {

    newCustomer.id = crypto.randomUUID()
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
    customers,
    addCustomer,
    reset
}