import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import RowsWrapper from './RowsWrapper';
import styles from './table.module.scss';
import TableHeader from './TableHeader';

export default function Table() {
    const navigate = useNavigate();
    const headers = ['First Name', 'Last Name', 'Address', 'SSN'];
    const [selectedItem, setSelectedItem] = useState<string>('');
    const selectItemHandler = (id: string) => () => setSelectedItem(id);
    const goToForm = () => navigate('/');
    return (
        <>
            <div className={styles.table_labels}>
                <h2>People Table</h2>
                <Button onClick={goToForm} height={44} width={150} title={'Add Person'} />
            </div>
            <TableHeader headers={headers} />
            <RowsWrapper selectItemHandler={selectItemHandler} selectedItem={selectedItem} />
        </>
    );
}
