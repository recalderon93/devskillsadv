import React from 'react';
import { GitHubIcon, LinkedinIcon } from '../../icons';
import styles from './footer.module.scss';

export default function Footer() {
    return (
        <div className={styles.container}>
            <p>Copyright © 2022 recalderon| All Right Reserved. </p>
            <div className={styles['icons-wrapper']}>
                <a
                    href="https://www.linkedin.com/in/recalderon93/"
                    target={'_blank'}
                    rel="noreferrer"
                >
                    <LinkedinIcon />
                </a>
                <a href="https://github.com/recalderon93" target={'_blank'} rel="noreferrer">
                    <GitHubIcon />
                </a>
            </div>
        </div>
    );
}
