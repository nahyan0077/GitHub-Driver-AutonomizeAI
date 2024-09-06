import React from 'react';
import './Button.css'; 
import { ButtonProps } from '../../../types/ui.types';



export const Button: React.FC<ButtonProps> = ({ text, onClick, style }) => {
    return (
        <button className="button" onClick={onClick} style={style} >{text} </button>
    );
};
