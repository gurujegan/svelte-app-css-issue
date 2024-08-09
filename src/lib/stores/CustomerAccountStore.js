import { get, writable } from 'svelte/store'
import { user } from '$lib/stores/UserStore'
import { currentOrg } from '$lib/stores/OrgStore.js'

let CUSTOMER_ACCOUNT = {

  bankAccNo: '',
  bankName: '',
  userId: get(user).userId,
}

export const customerAccounts = writable([])

const addCustomerAccount = (newCustomerAccount) => {

  newCustomerAccount.id = crypto.randomUUID()
  newCustomerAccount.orgId = get(currentOrg).orgId // Modified store 
  newCustomerAccount.createdAt = Date.now()

  newCustomerAccount = { ...CUSTOMER_ACCOUNT, ...newCustomerAccount }
  customerAccounts.set([...get(customerAccounts), newCustomerAccount]);
}

function getCustomerAccountById(id) {

  return get(customerAccounts).filter((customerAccount) => customerAccount.id === id)[0]
}

export default {
  addCustomerAccount,
  getCustomerAccountById
}