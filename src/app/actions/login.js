
// app/actions/login.js
'use server';

import { users } from './../components/loginData';

export async function loginUser({ username, password }) {
  // Simulate database check
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    return { success: true, user };
  } else {
    return { success: false, message: 'Invalid credentials' };
  }
}
