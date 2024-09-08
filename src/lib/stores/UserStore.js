import { writable } from 'svelte/store';

export const user = writable({
  userId: 'u01',
  username: 'test-user1',
  name: 'Test User1',
  email: 'gurujegan@ymail.com'
});