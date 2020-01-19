export const getRandomObjectElement = (object) => {
    let keys = Object.keys(object);
    let randomKey = keys[Math.floor(Math.random()*keys.length)];
    return object[randomKey];
}

export const getRandomArrayElement = (array) => {
    let arrayCopy = array.slice();
    for (let i = arrayCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }
    return arrayCopy.pop();
}
