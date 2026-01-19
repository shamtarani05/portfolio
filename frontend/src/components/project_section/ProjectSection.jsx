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
  // Personal Projects
  const personalProjects = [
    {
      title: "AegleKart",
      category: "E-Pharmacy Platform",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Nodemailer", "StreetMaps", "pdfkit", "Supabase"],
      description:
        "A full-stack e-pharmacy platform enabling users to browse, order, and pay for medicines online with OTP authentication, Stripe integration, admin dashboards, and inventory automation. Built with the MERN stack and optimized for real-world pharmacy workflows.",
      status: "Completed",
      color: "green-lime",
      icon: "💊",
      featured: true,
      otherContributor: "Abdul Moiz",
      terminalOutput: [
        { type: "command", text: "> node server.js" },
        { type: "output", text: "Starting AegleKart server..." },
        { type: "success", text: "✓ Server running at http://localhost:3000" },
        { type: "info", text: "✓ MongoDB connected successfully" },
        { type: "ready", text: "Frontend ready on port 5173 🚀" }
      ],
      codeLink: "https://github.com/shamtarani05/AegleKart/tree/master-branch"
    },
    {
      title: "Shinarawear",
      category: "E-Commerce Jewelry Platform",
      tech: ["React", "Node.js", "Express", "MongoDB", "Nodemailer", "StreetMaps", "pdfkit", "Supabase"],
      description:
        "A full-stack online jewelry store platform enabling users to browse, order, and purchase jewelry items with secure authentication, order management, admin dashboards, and inventory tracking. Built with the MERN stack and designed for elegant jewelry retail workflows.",
      status: "Completed",
      color: "purple-pink",
      icon: "💎",
      featured: false,
      terminalOutput: [
        { type: "command", text: "> node server.js" },
        { type: "output", text: "Starting Shinarawear server..." },
        { type: "success", text: "✓ Server running at http://localhost:3000" },
        { type: "info", text: "✓ MongoDB connected successfully" },
        { type: "ready", text: "Frontend ready on port 5173 ✨" }
      ],
      codeLink: "https://github.com/shamtarani05/Shinarawear",
      viewDemo: "https://shinarawear.vercel.app"
    },
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
      otherContributor: "Abdul Moiz & Maier Ali",
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
    },
    {
      title: "AceTransit",
      category: "Modern MultiModal Courier App",
      tech: ["Next.js", "TypeScript", "Tailwind", "Text-to-Speech", "Rule-based AI Agent", "Supabase"],
      description:
        "AceTransit is a modern and multimodal courier application designed to streamline delivery operations. It features text-to-speech capabilities for hands-free operation and a rule-based AI agent for intelligent routing and scheduling decisions. Built with Next.js and TypeScript for robust performance.",
      status: "Completed",
      color: "cyan-teal",
      icon: "🚚",
      featured: false,
      otherContributor: "Abdul Moiz",
      terminalOutput: [
        { type: "command", text: "> npm run dev" },
        { type: "output", text: "Starting AceTransit..." },
        { type: "success", text: "✓ Next.js server running" },
        { type: "info", text: "✓ AI Agent initialized" },
        { type: "ready", text: "Ready for deliveries 📦" }
      ],
      codeLink: "https://github.com/AbdulMoiz132/AceTransit",
    },
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
    },
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

  // // Fiverr Projects
  // const fiverrProjects = [
  //   {
  //     title: "Optivolt Staffing",
  //     category: "Client & Worker Platform",
  //     tech: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Realtime Database"],
  //     description:
  //       "An immersive staffing platform connecting clients and workers. Clients can post jobs, message applicants, manage payments and invoices. Workers can find and apply for jobs, and request payments. Features a comprehensive client admin dashboard to manage both workers and clients efficiently.",
  //     status: "Completed",
  //     color: "orange-red",
  //     icon: "👷",
  //     featured: true,
  //     terminalOutput: [
  //       { type: "command", text: "> npm run dev" },
  //       { type: "output", text: "Starting Optivolt Staffing..." },
  //       { type: "success", text: "✓ Next.js server running" },
  //       { type: "info", text: "✓ Supabase Realtime connected" },
  //       { type: "ready", text: "Platform ready for clients & workers 💼" }
  //     ],
  //     codeLink: null,
  //   }
  // ];

  // Long Term & Ongoing Projects
  const longTermProjects = [
    {
      title: "Romails",
      category: "USA E-Store & Tailoring",
      tech: ["Web Development", "E-Commerce", "Maintenance"],
      description:
        "Romails is a USA-based e-store and tailoring platform. As the maintainer, I am responsible for updating and maintaining the website according to business needs, ensuring smooth operation and implementing new features as required.",
      status: "Ongoing",
      color: "blue-purple",
      icon: "🛍️",
      featured: false,
      role: "Maintain and update website as per needs",
      terminalOutput: [
        { type: "command", text: "> status --check" },
        { type: "output", text: "Checking Romails status..." },
        { type: "success", text: "✓ Website running smoothly" },
        { type: "info", text: "✓ All systems operational" },
        { type: "ready", text: "Ready for updates 🔧" }
      ],
      codeLink: null,
      viewDemo: "https://romails.com"
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

  // Get featured and regular projects for each section
  const personalFeatured = personalProjects.filter(project => project.featured === true);
  const personalRegular = personalProjects.filter(project => project.featured === false);
  

  // Render a featured project card
  const renderFeaturedProject = (featuredProject) => (
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
              {featuredProject.otherContributor && (
                <p className={styles.contributorTag}>Other Contributor: {featuredProject.otherContributor}</p>
              )}
              <div className={styles.techTags}>
                {featuredProject.tech.map((tech) => (
                  <span key={tech} className={styles.techTag}>{tech}</span>
                ))}
              </div>

              <p className={styles.featuredDescription}>{featuredProject.description}</p>

              {featuredProject.codeLink && <div className={styles.featuredButtons}>
                <button className={styles.secondaryButton} onClick={() => { handleViewCode(featuredProject.codeLink) }}>{'> View Code'}</button>
              </div>}
              {featuredProject.viewDemo && <div className={styles.featuredButtons}>
                <button className={styles.secondaryButton} onClick={() => { handleViewCode(featuredProject?.viewDemo) }}>{'> Demo'}</button>
              </div>}
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
  );

  // Render a regular project card
  const renderProjectCard = (project) => (
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
        {project.otherContributor && (
          <p className={styles.contributorInfo}>Other Contributor: {project.otherContributor}</p>
        )}
        {project.role && (
          <p className={styles.roleInfo}>Role: {project.role}</p>
        )}
        <p className={styles.projectDescription}>{project.description}</p>

        <div className={styles.projectTech}>
          {project.tech.map((tech) => (
            <span key={tech} className={styles.projectTechTag}>{tech}</span>
          ))}
        </div>

        {project.codeLink && <div className={styles.projectActions}>
          <button className={styles.viewButton} onClick={() => { handleViewCode(project.codeLink) }}>View Code</button>
        </div>}
        {project.viewDemo && <div className={styles.projectActions}>
          <button className={styles.viewButton} onClick={() => { handleViewCode(project?.viewDemo) }}>View Demo</button>
        </div>}
      </div>
      <div className={`${styles.projectBorder} ${styles[project.color]}`}></div>
    </div>
  );

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

        {/* Personal Projects Section */}
        <div className={styles.categorySection}>
          <h3 className={styles.categoryTitle}>{'// Personal Projects'}</h3>

          {/* Featured Personal Projects */}
          {personalFeatured.length > 0 && (
            <div className={styles.featuredSection}>
              {personalFeatured.map(renderFeaturedProject)}
            </div>
          )}

          {/* Regular Personal Projects */}
          <div className={styles.projectGrid}>
            {personalRegular.map(renderProjectCard)}
          </div>
        </div>

       

        {/* Long Term & Ongoing Projects Section */}
        <div className={styles.categorySection}>
          <h3 className={styles.categoryTitle}>{'// Long Term & Ongoing Projects'}</h3>

          <div className={styles.projectGrid}>
            {longTermProjects.map(renderProjectCard)}
          </div>
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