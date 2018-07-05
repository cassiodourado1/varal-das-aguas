/* Core */
import React from 'react';

/* Styles */
import styles from './styles.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <img className={styles.logo} src={require('./img/logoInema.jpg')}alt="Logo Inema" />
            {/*<img className={styles.logo} src="./img/logoInema.jpg" alt="Logo Inema" />*/}
        </div>
    );
}


export default Footer;