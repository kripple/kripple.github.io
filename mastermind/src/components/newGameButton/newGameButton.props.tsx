import React from 'react';

export type NewGameButtonProps = { 
    onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void), 
    displayText?: string 
};