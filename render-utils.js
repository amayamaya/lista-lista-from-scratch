export function renderItem(item) {
    const div = document.createElement('div');
    div.textContent = `${item.desire} ${item.abundance}`;
    // console.log('div');

    if (item.purchased) {
        div.classList.add('complete');
    }
    return div;
}