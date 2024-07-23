import { writable } from 'svelte/store';

export const customerAccount = writable({
  panId: '',
  customerName: '',
  bankAccNo: '',
  bankName: '',
  email: '',
  mobNo: '',
  orgId: '',
  userId: '',
  createdAt: '',
  updatedAt: '',
});