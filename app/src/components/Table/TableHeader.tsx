import React from 'react';
import styles from './table.module.scss';

interface TableHeaderProps {
    headers: Array<string>;
}
export default function TableHeader({ headers }: TableHeaderProps) {
    return (
        <div className={`${styles.header_wrapper}`}>
            <div className={styles.header_item}>
                <p>Item</p>
            </div>
            {headers.map(item => {
                return (
                    <div key={item} className={styles.header_item}>
                        <p>{item}</p>
                    </div>
                );
            })}
        </div>
    );
}
