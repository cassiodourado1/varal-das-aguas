/* Core */
import React, { Component } from 'react';

import styles from './styles.css';


class Header extends Component {
    render() {
        return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.menu}>
                    <li className={styles.itemMenu}><a className={styles.link} href="#top">INÍCIO</a></li>
                    <li className={styles.itemMenu}><a className={styles.link} href="#concourse">O CONCURSO</a></li>
                    <li className={styles.itemMenu}><a className={styles.link} href="#about">SOBRE</a></li>
                    <li className={styles.itemMenu}><a className={styles.link} href="#rules">REGRAS</a></li>
                </ul>
            </nav>
        </header>
        );
    }
}

export default Header;