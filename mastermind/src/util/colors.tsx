import { NUM_TOKENS_IN_SEQUENCE } from 'util/settings'

export enum COLORS { 
    RED = "red", 
    ORANGE = "orange", 
    YELLOW = "yellow",
    GREEN = "green", 
    BLUE = "blue",
    PURPLE = "purple" 
};

export const getRandomColors = (colors: typeof COLORS, count = NUM_TOKENS_IN_SEQUENCE): Array<string> => {
    let randomColors = [];
    while (randomColors.length < count) {
        randomColors.push(getRandomColor(colors));
    }
    return randomColors;
}

const getRandomColor = (colors: typeof COLORS): string => {
    let array = Object.values(colors)
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    const randomColor = array.pop();
    if (randomColor === undefined) {
        throw TypeError('getRandomColor:randomColor is undefined');
    }
    return randomColor;
}


