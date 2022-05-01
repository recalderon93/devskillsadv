import React, { KeyboardEvent } from 'react';
import type { PersonData } from 'src/types';
import styles from './table.module.scss';

interface TableItemProps {
    onClick: () => void;
    isSelected: boolean;
    index: number;
    data: PersonData;
}
export default function TableItem({ data, onClick, index, isSelected }: TableItemProps) {
    const { firstName, lastName, address, ssn } = data;
    function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
        if (e.keyCode === 13) {
            onClick();
        }
    }
    return (
        <div
            className={`${styles.table_item} ${isSelected && styles.selected}`}
            onClick={() => onClick()}
            role="button"
            onKeyDown={handleKeyDown}
            tabIndex={0}
        >
            <div className={styles.table_item_child}>{index}</div>
            <div className={styles.table_item_child}>{firstName}</div>
            <div className={styles.table_item_child}>{lastName}</div>
            <div className={styles.table_item_child}>{address}</div>
            <div className={styles.table_item_child}>{ssn}</div>
        </div>
    );
}
