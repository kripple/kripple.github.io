import React from 'react';

export interface NewGameButtonProps { 
    onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void), 
    displayText?: string 
};