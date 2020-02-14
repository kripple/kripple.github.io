import { NUM_TOKENS_IN_SEQUENCE } from 'util/settings';

export let initialSequence = (): Array<string> => {
    let sequence = [];
    for( let i = 0; i < NUM_TOKENS_IN_SEQUENCE; i++ ) {
        sequence.push("transparent");
    }
    return sequence;
};