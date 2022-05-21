import { logout, fetchListItems, togglePurchasedItems, deleteAll } from '../fetch-utils.js';
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
    // console.log(data);
    if (data) {
        for (let item of data) {
            // renderItem(item);
            const itemEl = renderItem(item);
            itemEl.addEventListener('click', async (e) => {
                e.preventDefault();
                await togglePurchasedItems(item);
                displayListItems();

            });
            wishListEl.append(itemEl);
        }
    }
}
const deleteButton = document.getElementById('delete-button');
deleteButton.addEventListener('click', async () => {
    await deleteAll();
    displayListItems();
});
displayListItems();

