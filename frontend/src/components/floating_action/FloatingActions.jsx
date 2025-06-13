// FloatingActions.jsx
import React from 'react';
import styles from './FloatingActions.module.css';

const FloatingActions = () => {
  const actions = [
    {
      icon: '↑',
      color: 'cyan',
      action: () => window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    {
      icon: '⚡',
      color: 'purple',
      action: () => console.log('Quick action')
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.buttonGroup}>
        {actions.map((item, index) => (
          <button
            key={index}
            onClick={item.action}
            className={`${styles.actionButton} ${styles[item.color]}`}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FloatingActions;
