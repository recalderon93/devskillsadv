/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { PersonData } from 'src/types';
import { useStoreContext } from '../../store/StoreContext';
import Button from '../button/Button';
import styles from './addPersonForm.module.scss';
import { getPeopleData, postPersonData } from '../../services';
import TextField from '../TextField/TextField';

const initialValues: PersonData = { address: '', firstName: '', lastName: '', ssn: '' };

export default function AddPersonForm() {
    const { actions, state } = useStoreContext();
    const navigate = useNavigate();
    const [isValid, setValid] = useState<boolean>(false);
    const [formData, setFormData] = useState<PersonData>(initialValues);
    const [errors, setErrors] = useState<Record<keyof PersonData, { error: boolean; msg?: '' }>>({
        address: { error: false },
        firstName: { error: false },
        lastName: { error: false },
        ssn: { error: false }
    });

    const resetValues = () => {
        setFormData(initialValues);
    };

    function setFormValue(fieldName: keyof PersonData) {
        return (e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData(st => ({ ...st, [`${fieldName}`]: e.target.value }));
    }
    function setBlurValue(fieldName: keyof PersonData) {
        return (e: React.FocusEvent<HTMLInputElement, Element>) =>
            setFormData(st => ({ ...st, [`${fieldName}`]: st[`${fieldName}`].trim() }));
    }
    function setFormError(fieldName: keyof PersonData, input: { error: boolean; msg?: string }) {
        setErrors(st => ({ ...st, [`${fieldName}`]: input }));
    }

    function verifyData(input: PersonData) {
        const arrKeys: Array<keyof PersonData> = ['address', 'firstName', 'lastName', 'ssn'];
        let error = false;
        const re = /^\d{3}-?\d{2}-?\d{4}$/;
        arrKeys.forEach(item => {
            if (item !== 'ssn') {
                if (
                    input[`${item}`].length !== input[`${item}`].trim().length ||
                    input[`${item}`].length < 1
                ) {
                    error = true;
                }
            } else {
                error = !re.test(input[`${item}`]);
            }
        });
        if (error === isValid) {
            setValid(!error);
        }
    }

    const addPersonHandler = async () => {
        try {
            const res = await postPersonData(formData);
            actions.addPerson(formData);
            navigate('data_table');
        } catch (error) {
            const data = await getPeopleData();
            const res = data.find(item => item.ssn === formData.ssn);
            if (res !== undefined) {
                // eslint-disable-next-line no-alert
                alert('SSN already registered');
                setFormData(st => ({ ...st, ssn: '' }));
            } else {
                // @ts-ignore
                // eslint-disable-next-line no-alert
                alert(error.message);
            }
        }
    };

    useEffect(() => {
        verifyData(formData);
    }, [formData]);

    return (
        <div className={styles.container}>
            <h2>Add Person Form</h2>
            <div className={styles.labels_wrapper}>
                <TextField
                    error={errors.firstName.error}
                    onChange={setFormValue('firstName')}
                    onBlur={setBlurValue('firstName')}
                    value={formData.firstName}
                    errorMsg={errors.firstName.msg}
                    label={'First Name'}
                />
                <TextField
                    error={errors.lastName.error}
                    onChange={setFormValue('lastName')}
                    onBlur={setBlurValue('lastName')}
                    value={formData.lastName}
                    errorMsg={errors.lastName.msg}
                    label={'Last Name'}
                />
                <TextField
                    error={errors.address.error}
                    onChange={setFormValue('address')}
                    onBlur={setBlurValue('address')}
                    value={formData.address}
                    errorMsg={errors.address.msg}
                    label={'Address'}
                />
                <TextField
                    error={errors.ssn.error}
                    onChange={setFormValue('ssn')}
                    onBlur={setBlurValue('ssn')}
                    value={formData.ssn}
                    errorMsg={errors.ssn.msg}
                    label={'SSN'}
                />
            </div>
            <div className={styles.buttons_wrapper}>
                <Button height={44} width={150} title={'Reset'} onClick={resetValues} />
                <Button
                    disabled={!isValid}
                    height={44}
                    width={150}
                    title={'Save'}
                    onClick={addPersonHandler}
                />
            </div>
        </div>
    );
}
