/* Core */
import React, { Component } from 'react';

import styles from './styles.css';


class Header extends Component {
    render() {
        return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.menuHeader}>
                    <li className={styles.itemMenu}><a>INÍCIO</a></li>
                    <li className={styles.itemMenu}><a>O CONCURSO</a></li>
                    <li className={styles.itemMenu}><a>SOBRE</a></li>
                    <li className={styles.itemMenu}><a>REGRAS</a></li>
                </ul>
            </nav>
        </header>
        );
    }
}

export default Header;