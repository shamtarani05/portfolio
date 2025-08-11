import React from 'react';
import styles from './TechStack.module.css';

const TechStack = () => {
  const techData = [
    { name: 'HTML', icon: '📄', level: '95%', color: 'indigo' },
    { name: 'JavaScript', icon: '📘', level: '92%', color: 'yellow' },
    { name: 'CSS', icon: '🎨', level: '90%', color: 'purple' },
    { name: 'React', icon: '⚛️', level: '90%', color: 'blue' },
    { name: 'MongoDB', icon: '🗄️', level: '85%', color: 'green' },
    { name: 'SQL', icon: '📊', level: '85%', color: 'indigo' },
    { name: 'Express.js', icon: '⚙️', level: '85%', color: 'yellow' },
    { name: 'Node.js', icon: '🚀', level: '80%', color: 'purple' },
    { name: 'C++', icon: '💻', level: '75%', color: 'blue' },
    { name: 'ReactFlow', icon: '⚛️', level: '75%', color: 'green' },
    { name: 'java', icon: '☕', level: '70%', color: 'indigo' },
    { name: 'C', icon: '💻', level: '70%', color: 'yellow' },
    { name: 'Git', icon: '🐱‍👤', level: '70%', color: 'purple' },
    { name: 'Python', icon: '🐍', level: '60%', color: 'blue' },
    { name: 'Three.js', icon: '🎲', level: '50%', color: 'green' },
     
  ];

  return (
    <section className={styles.techStack}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {'<TechStack />'}
          </h2>
          <p className={styles.subtitle}>Tools powering the coding space</p>
        </div>

        <div className={styles.grid}>
          {techData.map((tech) => (
            <div
              key={tech.name}
              className={`${styles.techCard} ${styles[tech.color]}`}
            >
              <div className={styles.techContent}>
                <div className={styles.techIcon}>
                  {tech.icon}
                </div>
                <h3 className={styles.techName}>{tech.name}</h3>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: tech.level }}
                  ></div>
                </div>
                <p className={styles.techLevel}>{tech.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;