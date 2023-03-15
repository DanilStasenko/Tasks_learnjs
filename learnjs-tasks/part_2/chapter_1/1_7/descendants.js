function descendants() {
    let items = document.getElementsByTagName('li');

    for (let item of items) {
        let descendantsCount = item.querySelectorAll('li').length;
        if (!descendantsCount) continue;
    
        item.firstChild.data += ' [' + descendantsCount + ']';
    }
}