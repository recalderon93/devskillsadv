import React from 'react';
import styles from './header.module.scss';

interface HeaderProps {
    /** Set the header title */
    title: string;
}
/**
 * # Header
 * Component that Renders the App header.
 */
function Header({ title }: HeaderProps) {
    return (
        <header className={styles.container}>
            <img
                src="https://newcombin.com/wp-content/themes/newcombin/assets/img/nc-footer.png"
                alt="New Combin logo"
                width="57.63"
                height="40"
            />
            <h1>{title}</h1>
        </header>
    );
}

export default Header;
