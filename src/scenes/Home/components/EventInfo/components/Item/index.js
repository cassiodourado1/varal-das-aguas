/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Styles */
import styles from './styles.css';

const Item = ({
    label, description,
  }) => {
    return (
        <div className={styles.item}>
            <h3 className={styles.label}>{label}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    );
}

Item.propTypes = {
    label: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

export default Item;