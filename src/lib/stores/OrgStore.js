import { writable } from 'svelte/store';

export const org = writable({
  orgId: '',
  orgName: '',
  userId: '',
  createdAt: '',
  updatedAt: '',
});