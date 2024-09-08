import { get, writable } from 'svelte/store';
import { user } from '$lib/stores/UserStore'
import { currentOrg } from '$lib/stores/OrgStore.js';

const formElements = [
    { id: 'id', value: '#ID' },
    { id: 'date', value: 'Date' },
    { id: 'description', value: 'Description' },
    { id: 'type', value: 'Type' },
    { id: 'amount', value: 'Amount' },
    { id: 'category', value: 'Category' },
];

let TRANSACTION = {

    id: '',
    date: '',
    description: '',
    type: '',
    amount: '',
    category: '',
}

const transactions = writable([]);


function addTransaction(newTxn) {

    newTxn.id = crypto.randomUUID()
    newTxn.userId = get(user).userId,
    newTxn.orgId = get(currentOrg).orgId // Modified store
    newTxn.createdAt = Date.now()

    newTxn = { ...TRANSACTION, ...newTxn }
    transactions.set([...get(transactions), newTxn]);
}

// const getCustomers = (orgId) => {

//     return get(customers).filter((newCustomer) => { newCustomer.orgId === orgId })
// }

// function getCustomerById(id) {

//     return get(customers).find((newCustomer) => newCustomer.id == id)
//   }


// const reset = () => {
//     customers.set([]);
// };

export default {
    formElements,
    transactions,
    addTransaction,
}