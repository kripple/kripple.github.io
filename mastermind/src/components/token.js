// import './token.css';

class Token {
    constructor(color = Token.COLORS.DEFAULT) {
        this.color = color;
    }

    randomize() {
        let keys = Object.keys(Token.COLORS);
        let randomKey = keys[Math.floor(Math.random()*keys.length)];
        this.color = Token.COLORS[randomKey];
    }
}

Token.COLORS = {
    RED: {
        hexCode: "#FF0000",
        className: "red"
    },
    ORANGE: {
        hexCode: "#FF7400",
        className: "orange"
    },
    YELLOW: {
        hexCode: "#FFE900",
        className: "yellow"
    },
    GREEN: {
        hexCode: "#00FF00",
        className: "green"
    },
    BLUE: {
        hexCode: "#00FFFF",
        className: "blue"
    },
    PURPLE: {
        hexCode: "#5709B8",
        className: "purple"
    }
}

Token.COLORS.DEFAULT = Token.COLORS.RED;

export default Token;
