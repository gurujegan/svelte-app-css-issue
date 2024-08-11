import { get, writable } from 'svelte/store'
import { user } from '$lib/stores/UserStore'

// const ORG = {
//   orgId: '',
//   orgName: '',
//   userId: get(user).userId,
// }

const ORG = {
  orgId: crypto.randomUUID(),
  orgName: 'AAA',
  userId: get(user).userId,
}

export const orgList = writable([])

export const currentOrg = writable('')

// Setting sample org initially
addOrg(ORG)

function addOrg(newOrg) {

  newOrg.orgId = crypto.randomUUID()
  newOrg.createdAt = Date.now()
  newOrg = { ...ORG, ...newOrg }
  orgList.set([...get(orgList), newOrg])
}

function setCurrentOrg(orgId) {

  currentOrg.set(get(orgList).filter((org) => org.orgId === orgId)[0])
}

export default {
  addOrg,
  setCurrentOrg,
}