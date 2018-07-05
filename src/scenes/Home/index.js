/* Core */
import React, { Component } from 'react';

/* Presentation */
import FullBanner from './components/FullBanner';
import EventInfo from './components/EventInfo';
/* Styles */
import styles from './styles.css';


class Home extends Component {    
    render() {
        return (
            <main className={styles.home}>
                <FullBanner />
                <div className={styles.container}>
                    <section className={styles.concurso}>
                        o concurso
                    </section>
                    <section className={styles.boxInscricao}>
                        <EventInfo />
                        <button className={styles.button}>Faça sua inscrição</button>
                    </section>
                </div>
            </main>
        )
    }
}

export default Home