// src/components/Portfolio/Header/Header.jsx
import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: '🏠', section: 'hero' },
    { name: 'Projects', icon: '💻', section: 'projects' },
    { name: 'Skills', icon: '⚡', section: 'skills' },
    { name: 'Contact', icon: '📧', section: 'contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu after clicking
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <span className={styles.logoText}>{'<S/>'}</span>
          </div>
          <div>
            <span className={styles.name}>Sham Tarani</span>
            <p className={styles.title}>Full-Stack Developer</p>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className={styles.navItems}>
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.section)}
              className={styles.navItem}
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenu}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Navigation Menu */}
        <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.section)}
              className={styles.mobileNavItem}
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;