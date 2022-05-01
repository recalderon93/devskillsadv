import React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
    title: string;
    width: number;
    height: number;
    onClick: () => void;
    disabled?: boolean;
}
export default function Button({ title, width, height, disabled, onClick }: ButtonProps) {
    return (
        <button
            disabled={disabled}
            type="button"
            className={`${styles.container} ${disabled && styles.disabled}`}
            style={{ width, height }}
            onClick={onClick}
        >
            {title}
        </button>
    );
}

Button.defaultProps = {
    disabled: false
};
