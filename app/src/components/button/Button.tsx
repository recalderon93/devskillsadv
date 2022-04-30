import React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
    title: string;
    width: number;
    height: number;
    onClick: () => void;
}
export default function Button({ title, width, height, onClick }: ButtonProps) {
    return (
        <button
            type="button"
            className={styles.container}
            style={{ width, height }}
            onClick={onClick}
        >
            {title}
        </button>
    );
}
