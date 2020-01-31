import Sequence from 'components/sequence/sequence';

export type GameState = {
    sequence: Array<string>;
    newGame: () => void;
}