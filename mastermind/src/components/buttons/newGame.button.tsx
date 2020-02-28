import { MouseEvent } from 'react';
import { ButtonProps } from 'components/buttons/button.component';

export const displayText = "New Game";

export const onClick = (event: MouseEvent<HTMLButtonElement>) => {(props: ButtonProps) => {
    event.preventDefault();
    console.log(event)
}};
