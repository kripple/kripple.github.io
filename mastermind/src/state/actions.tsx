import { Action } from "redux";

export const NEW_GAME = 'NEW_GAME';
export const SUBMIT_GUESS = 'SUBMIT_GUESS';
export const WIN_GAME = 'WIN_GAME';

export class newGame implements Action {
    readonly type = NEW_GAME;
    constructor(public payload: Array<string>) {}
};

export class submitGuess implements Action {
    readonly type = SUBMIT_GUESS;
    constructor(public payload: Array<string>) {}
};

export class winGame implements Action {
    readonly type = WIN_GAME;
};

export type Types = 
  | newGame
  | submitGuess
  | winGame
