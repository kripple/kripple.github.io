import { PropsWithChildren, Props } from "react";
import { Matching } from "react-redux";
import Sequence from "components/sequence/sequence";
import { SequenceProps } from "components/sequence/sequence.props";

export interface GameProps {
    sequence: Array<string>;
    newGame: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
}

// Matching<{ sequence: Sequence; } & { newGame(): void; }, GameProps>