// src/components/Portfolio/HeroSection/HeroSection.jsx
import React from 'react';
import Avatar3D from '../Avatar/Avatar';
import styles from './HeroSection.module.css';

const HeroSection = () => {
   const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const downloadCV = () => {

    const link = document.createElement('a');
    link.href = './Sham_Resume.pdf';
    link.download = 'Sham_Tarani_CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <div className={styles.codeIntro}>
              <span className={styles.playIcon}>▶</span>
              <span>console.log("Welcome to my coding space")</span>
            </div>

            <h1 className={styles.title}>
              {'<Sham'}
              <br />
              <span className={styles.titleGradient}>
                {'Tarani />'}
              </span>
            </h1>

            <div className={styles.codeBlock}>
              <span className={styles.const}>const</span>{' '}
              <span className={styles.variable}>developer</span> = {'{'}
              <br />
              <span className={styles.property}>specialty:</span> <span className={styles.string}>"3D Web Experiences"</span>,
              <br />
              <span className={styles.property}>passion:</span> <span className={styles.string}>"Interactive Design"</span>
              <br />
              {'};'}
            </div>
             <div className={styles.codeBlock}>
              <span className={styles.const}>const</span>{' '}
              <span className={styles.variable}>education</span> = {'{'}
              <br />
              <span className={styles.property}>bachelor:</span> <span className={styles.string}>"NUST Islamabad"</span>,
              <br />
              <span className={styles.property}>degree:</span> <span className={styles.string}>"Computer Science"</span>
              <br />
              {'};'}
            </div>

            <div className={styles.buttons}>
              <button className={styles.primaryButton} onClick={downloadCV}>
                {'> Download_CV.exe'}
              </button>
              <button className={styles.secondaryButton} onClick={() => scrollToSection('contact')}>
                {'> ./contact_me'}
              </button>
            </div>
          </div>

          <Avatar3D />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;