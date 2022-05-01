import React from 'react';
import { useStoreContext } from '../../store/StoreContext';
import styles from './table.module.scss';
import TableItem from './TableItem';

interface RowsWrapperProps {
    selectedItem: string;
    selectItemHandler: (id: string) => () => void;
}

export default function RowsWrapper({ selectedItem, selectItemHandler }: RowsWrapperProps) {
    const { state } = useStoreContext();
    return (
        <div className={styles.rows_wrapper}>
            {state.peopleData.map((item, index) => {
                return (
                    <TableItem
                        key={item.ssn}
                        index={index + 1}
                        data={item}
                        isSelected={item.ssn === selectedItem}
                        onClick={selectItemHandler(item.ssn)}
                    />
                );
            })}
        </div>
    );
}
