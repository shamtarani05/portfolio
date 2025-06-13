// src/components/Portfolio/Portfolio.jsx
import HeroSection from '../hero_section/HeroSection';
import ProjectsSection from '../project_section/ProjectSection';
import TechStack from '../tech_stack/TechStack';
import WorkWithMe from '../work_with_me/WorkWithMe';
import FloatingActions from '../floating_action/FloatingActions';
import CommandLine from '../command_line/CommandLine';
import styles from './Portfolio.module.css';
import Header from '../header/Header';

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <Header />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="skills">
        <TechStack />
      </section>
      <section id="contact">
        <WorkWithMe />
      </section>
      <CommandLine />
      <FloatingActions />
    </div>
  );
};

export default Portfolio;