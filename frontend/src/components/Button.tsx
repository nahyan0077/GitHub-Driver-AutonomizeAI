import React from 'react';
import '../css/button.css'; 

interface ButtonProps {
    text: string; 
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button className="button" onClick={onClick} >{text} </button>
    );
};
