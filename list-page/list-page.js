import { checkAuth, logout } from '../fetch-utils';

import { renderItem } from '../render-utils.js';

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

// const wishListEl = document.getElementById('wish-list');
// const error = document.getElementById('error');

// async function displayListItems() {
//     wishListEl.textContent = '';
//     const data = await 
// }