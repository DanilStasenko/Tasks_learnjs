let items = document.querySelectorAll('li');

for (let item of items) {
    let itemName = item.firstChild.data.trim();

    let count = item.querySelectorAll('li').length;

    console.log(`${itemName}: ${count}`);
}