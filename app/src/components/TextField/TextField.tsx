import React, { ChangeEvent } from 'react';
import styles from './textField.module.scss';

interface TextFieldProps {
    label?: string;
    error: boolean;
    errorMsg?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
    value: string;
}

export default function TextField({
    label,
    error,
    errorMsg,
    value,
    onChange,
    onBlur
}: TextFieldProps) {
    return (
        <div className={styles.container}>
            <p className={`${styles.field_label} ${error && styles.on_error}`}>{label}</p>
            <input
                className={`
								${styles.input_field} 
								${error && styles.on_error}`}
                type={'text'}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
            />
            {error && errorMsg && (
                <p className={`${styles.field_error_message} ${error && styles.on_error}`}>
                    {errorMsg}
                </p>
            )}
        </div>
    );
}

TextField.defaultProps = {
    label: undefined,
    errorMsg: undefined
};
