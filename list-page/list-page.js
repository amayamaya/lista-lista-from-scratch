import { logout, fetchListItems } from '../fetch-utils.js';
import { renderItem } from '../render-utils.js';

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

const wishListEl = document.getElementById('wish-list');
// const error = document.getElementById('error');

async function displayListItems() {
    wishListEl.textContent = '';
    const data = await fetchListItems();
    console.log(data);
    if (data) {
        for (let item of data) {
            // renderItem(item);
            const itemEl = renderItem(item);
            wishListEl.append(itemEl);
        }
    }
}
displayListItems();