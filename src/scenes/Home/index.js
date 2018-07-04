/* Core */
import React, { Component } from 'react';

/* Presentation */
import FullBanner from './components/FullBanner';

/* Styles */
import styles from './styles.css';


class Home extends Component {    
    render() {
        return (
            <div className={styles.home}>
                <FullBanner />
            </div>
        )
    }
}

export default Home