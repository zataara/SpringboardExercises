const choice = (items) => {
    let randidx = Math.floor(Math.random() * items.length) + 1
    return items[randidx]
}


const remove = (items, item) => {
    if(items.findIndex(item)) {
        items.splice(items.findIndex(item), 1)
    } else {
        return;
    }
}

export {choice, remove};