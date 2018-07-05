/* Core */
import React from 'react';

/* Styles */
import styles from './styles.css';
const FullBanner = () => (
  <div className={styles.fullBanner}>    
    <div className={styles.boxSiteName}>
      <span className={styles.box}>
        <h1 className={styles.siteName}>Varal das Águas</h1>
        <h2 className={styles.description}>Concurso de Fotografia</h2>
      </span>
    </div>
  </div>
);

export default FullBanner;
