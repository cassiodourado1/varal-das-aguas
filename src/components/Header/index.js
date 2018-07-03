/* Core */
import React, { Component } from 'react';

import styles from './styles.css';


class Header extends Component {
    state = {  }
    render() {
        return (
        <header className="header">
            <nav className="nav">
                <ul className="menuHeader">
                    <li className="itemMenu"><a className="">INÍCIO</a></li>
                    <li className="itemMenu"><a className="">O CONCURSO</a></li>
                    <li className="itemMenu"><a className="">SOBRE</a></li>
                    <li className="itemMenu"><a className="">REGRAS</a></li>
                </ul>
            </nav>
        </header>
        );
    }
}

export default Header;