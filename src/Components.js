import React from 'react';

// Button Component
export const Button = ({ text, onClick, className }) => {
    return (
        <button onClick={onClick} className={className}>
            {text}
        </button>
    );
};

// Label Component
export const Label = ({ text, style }) => {
    return (
        <label style={style}>
            {text}
        </label>
    );
};

// Input Component
export const Input = ({ type, placeholder, value, onChange, style }) => {
    return (
        <input 
            type={type} 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange} 
            style={style}
        />
    );
};
