import Sequence from 'components/sequence/sequence';

export type GameProps = {
    sequence: Sequence;
    newGame: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
}