export const getRandomObjectElement = (object) => {
    let keys = Object.keys(object);
    let randomKey = keys[Math.floor(Math.random()*keys.length)];
    return object[randomKey];
}