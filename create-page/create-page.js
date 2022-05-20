import { checkAuth, logout, createListItem } from '../fetch-utils.js';

checkAuth();

const createForm = document.querySelector('.create-form');
const error = document.getElementById('error');

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

createForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const itemData = new FormData(createForm);
    const data = await createListItem(itemData.get('desire'), itemData.get('abundance'));
    if (data) {
        window.location.href = '/list-page';     
    } else {
        error.textContent = 'Something went bananas :(';
    }
});