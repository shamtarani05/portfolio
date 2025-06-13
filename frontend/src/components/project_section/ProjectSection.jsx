// ProjectsSection.jsx
import styles from './ProjectSection.module.css';
const ProjectsSection = () => {

  const handleViewCode = (codeLink) => {
    if (codeLink) {
      window.open(codeLink, '_blank');
    } else {
      alert("Code link not available for this project.");
    }
  }
  const projects = [
    {
      title: "AegleKart",
      category: "E-Pharmacy Platform",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Nodemailer", "StreetMaps", "pdfkit"],
      description:
        "A full-stack e-pharmacy platform enabling users to browse, order, and pay for medicines online with OTP authentication, Stripe integration, admin dashboards, and inventory automation. Built with the MERN stack and optimized for real-world pharmacy workflows.",
      status: "Completed",
      color: "green-lime",
      icon: "💊",
      featured: true,
      terminalOutput: [
        { type: "command", text: "> node server.js" },
        { type: "output", text: "Starting AegleKart server..." },
        { type: "success", text: "✓ Server running at http://localhost:3000" },
        { type: "info", text: "✓ MongoDB connected successfully" },
        { type: "ready", text: "Frontend ready on port 5173 🚀" }
      ],
      codeLink: "https://github.com/shamtarani05/AegleKart/tree/master-branch"
    }
    ,
    {
      title: "AegleCove",
      category: "Healthcare Assistant",
      tech: ["Node.js", "React", "Spring Boot", "JSON", "DSA", "StreetMaps"],
      description:
        "AegleCove is a smart healthcare assistant designed to help patients manage their health records, understand medications, and get information about diseases and symptoms. The system includes a symptom analyzer, medicine and disease knowledge base, and health record management. Built using Spring Boot for the backend and React for the frontend.",
      status: "Completed",
      color: "blue-sky",
      icon: "🏥",
      featured: false,
      terminalOutput: [
        { type: "command", text: "> npm run dev" },
        { type: "output", text: "Launching AegleCove Frontend..." },
        { type: "info", text: "✓ React app running on http://localhost:5173" },
        { type: "command", text: "> mvn spring-boot:run" },
        { type: "output", text: "Starting Spring Boot Backend..." },
        { type: "success", text: "✓ Backend running on http://localhost:8080" },
        { type: "ready", text: "System active and ready to assist patients 🩺" }
      ],
      codeLink: "https://github.com/AbdulMoiz132/AegleCove",
    }
    ,
    {
      title: "Foodie Express",
      category: "Full-Stack App",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      description:
        "Foodie Express is a full-stack web application that lets users explore a variety of restaurants, including Desi and Fast Food categories. While it doesn't support ordering, users can browse menus and add their own restaurants with custom menu items. Built using React, Node.js, Express, and MongoDB.",
      status: "In Progress",
      color: "yellow-orange",
      icon: "🍽️",
      featured: false,
      terminalOutput: [
        { type: "command", text: "> npm run dev" },
        { type: "output", text: "Launching Foodie Express..." },
        { type: "info", text: "✓ MongoDB connection successful" },
        { type: "success", text: "✓ Restaurants loaded" },
        { type: "ready", text: "✓ New restaurant added ✅" }
      ],
      codeLink: "https://github.com/shamtarani05/FoodieExpress",
    }

    ,
    {
      title: "Quizardry",
      category: "Quiz Management System",
      tech: ["Java", "Swing", "MySQL"],
      description:
        "Quizardry is a desktop quiz management system built with Java Swing and MySQL. It allows teachers to create and manage quizzes, register students, and automate grading. Students can log in, take quizzes, and view past results through a simple and interactive interface. The app supports full CRUD operations and helps digitize traditional quiz workflows for better efficiency and record-keeping.",
      status: "Completed",
      color: "sky-blue",
      icon: "🧠",
      featured: false,
      terminalOutput: [
        { type: "command", text: "> java -jar Quizardry.jar" },
        { type: "output", text: "Launching Quizardry Application..." },
        { type: "success", text: "✓ GUI Loaded Successfully" },
        { type: "info", text: "✓ Connected to MySQL Database" },
        { type: "ready", text: "Login screen ready for Admin & Students" }
      ],
      codeLink: "https://github.com/shamtarani05/Quizardry/blob/master/src/loginandsignup/Main.java"
    }


  ];

  const stats = [
    { label: 'Projects Completed', value: '5+', icon: '🚀' },
    { label: 'Technologies Used', value: '20+', icon: '⚙️' },
    { label: 'Code Commits', value: '500+', icon: '💻' },
    { label: 'Coffee Consumed', value: '∞', icon: '☕' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  // Get featured projects and regular projects
  const featuredProjects = projects.filter(project => project.featured === true);
  const regularProjects = projects.filter(project => project.featured === false);

  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.titleContainer}>
            <div className={styles.titleLine}></div>
            <h2 className={styles.sectionTitle}>{'<Projects />'}</h2>
            <div className={styles.titleLine}></div>
          </div>
          <p className={styles.sectionSubtitle}>Software Solutions & Digital Experiences</p>
          <p className={styles.sectionDescription}>
            Explore our cutting-edge software development projects, from enterprise applications to immersive 3D experiences
          </p>
        </div>


        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className={styles.featuredSection}>
            {featuredProjects.map((featuredProject) => (
              <div key={featuredProject.title} className={styles.featuredProject}>
                <div className={styles.featuredCard}>
                  <div className={styles.featuredBg}></div>
                  <div className={styles.featuredContent}>
                    <div className={styles.featuredGrid}>
                      <div className={styles.featuredInfo}>
                        <div className={styles.terminalHeader}>
                          <div className={styles.terminalDots}>
                            <div className={`${styles.dot} ${styles.dotRed}`}></div>
                            <div className={`${styles.dot} ${styles.dotYellow}`}></div>
                            <div className={`${styles.dot} ${styles.dotGreen}`}></div>
                          </div>
                          <span className={styles.terminalTitle}>featured_project.exe</span>
                        </div>

                        <h3 className={styles.featuredTitle}>{featuredProject.title}</h3>
                        <div className={styles.techTags}>
                          {featuredProject.tech.map((tech) => (
                            <span key={tech} className={styles.techTag}>{tech}</span>
                          ))}
                        </div>

                        <p className={styles.featuredDescription}>{featuredProject.description}</p>

                        <div className={styles.featuredButtons}>
                          <button className={styles.secondaryButton} onClick={() => { handleViewCode(featuredProject.codeLink) }}>{'> View Code'}</button>
                        </div>
                      </div>

                      <div className={styles.featuredDemo}>
                        <div className={styles.terminalDemo}>
                          <div className={styles.terminalStatus}>
                            <div className={styles.statusDot}></div>
                            <span>SYSTEM RUNNING</span>
                          </div>
                          <div className={styles.terminalOutput}>
                            {featuredProject.terminalOutput.map((line, index) => (
                              <div key={index} className={styles[`${line.type}Line`]}>
                                {line.text}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}


        {/* Project Grid */}
        <div className={styles.projectGrid}>
          {regularProjects.map((project) => (
            <div key={project.title} className={styles.projectCard}>
              <div className={`${styles.projectBg} ${styles[project.color]}`}></div>
              <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                  <div className={styles.projectIcon}>{project.icon}</div>
                  <div className={`${styles.statusBadge} ${styles[project.status.toLowerCase().replace(' ', '')]}`}>
                    {project.status}
                  </div>
                </div>

                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectCategory}>{project.category}</p>
                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.projectTech}>
                  {project.tech.map((tech) => (
                    <span key={tech} className={styles.projectTechTag}>{tech}</span>
                  ))}
                </div>

                <div className={styles.projectActions}>
                  <button className={styles.viewButton} onClick={() => { handleViewCode(project.codeLink) }}>View Code</button>
                </div>
              </div>
              <div className={`${styles.projectBorder} ${styles[project.color]}`}></div>
            </div>
          ))}
        </div>


        {/* Stats */}
        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
        

        {/* Call to Action */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <h3 className={styles.ctaTitle}>Ready to Start Your Project?</h3>
            <p className={styles.ctaDescription}>
              Let's collaborate and bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
            <button className={styles.ctaButton} onClick={() => { scrollToSection('contact') }}>{'> Start_Project()'}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;