/* Core */
import React from 'react';

/* Presentation */
import Item from './components/Item';

/* Styles */
import styles from './styles.css';

const items = [
    {
      label: 'EXPOSIÇÃO DE FOTOS', 
      description: '20 á 24/03/2017 na divisórias da Ouvidoria (em frente ao elevador)',
    },
    {
      label: 'APRESENTAÇÃO', 
      description: '20/03/2017 das 16:30h ás 17:30h.',
    },
  ];

const EventInfo = () => {
    return (
        <div className={styles.eventInfo}>
        {items.map(item =>
            (<Item
              label={item.label}
              description={item.description}
            />))}
        </div>
    );
}

export default EventInfo;