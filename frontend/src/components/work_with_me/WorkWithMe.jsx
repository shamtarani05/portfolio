import React, { useState } from 'react';
import styles from './WorkWithMe.module.css';

const WorkWithMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    projectDetails: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      desc: 'Full-stack applications with modern frameworks',
      price: 'From $50'
    },
    {
      icon: '🎲',
      title: '3D Experiences',
      desc: 'Interactive 3D web applications & visualizations',
      price: 'From $70'
    },
    {
      icon: '🖥️',
      title: 'Java Swing Desktop Apps',
      desc: 'Interactive Java Swing desktop applications',
      price: 'From $35'
    },
     {
      icon: '🖥️',
      title: 'C/C++/Python Development',
      desc: 'Interactive C/C++/Python applications',
      price: 'From $35'
    },
  ];

  const processSteps = [
    { step: '01', title: 'Discovery', desc: 'Understanding your vision and requirements', icon: '🔍' },
    { step: '02', title: 'Design', desc: 'Creating wireframes and visual mockups', icon: '🎨' },
    { step: '03', title: 'Develop', desc: 'Building with cutting-edge technologies', icon: '⚡' },
    { step: '04', title: 'Deploy', desc: 'Launch and ongoing maintenance', icon: '🚀' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setIsSubmitting(true);
    setSubmitStatus('submitting');

    try {
      const form = new FormData();
      form.append('_subject', 'New Project Inquiry from Portfolio');
      form.append('_captcha', 'false');
      form.append('_template', 'table');
      form.append('Client Name', formData.name);
      form.append('Client Email', formData.email);
      form.append('project_type', formData.projectType);
      form.append('budget', formData.budget);
      form.append('timeline', formData.timeline);
      form.append('project_details', formData.projectDetails);

      const response = await fetch('https://formsubmit.co/shamtarani05@gmail.com', {
        method: 'POST',
        body: form
      });

      if (response.ok) {
        setSubmitStatus('submitted');
        setFormData({
          name: '',
          email: '',
          projectType: '',
          budget: '',
          timeline: '',
          projectDetails: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    }
  };

  const getStatusMessage = () => {
    switch (submitStatus) {
      case 'submitting':
        return { text: 'Transmitting data...', color: 'yellow' };
      case 'submitted':
        return { text: 'Request submitted successfully! ✓', color: 'green' };
      case 'error':
        return { text: 'Transmission failed. Please try again.', color: 'red' };
      default:
        return { text: 'Ready to receive transmission', color: 'green' };
    }
  };

  return (
    <section className={styles.workWithMe}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <div className={styles.titleLine}></div>
            <h2 className={styles.title}>{'<Work_With_Me />'}</h2>
            <div className={styles.titleLine}></div>
          </div>
          <div className={styles.subtitle}>
            <span className={styles.pulse}>▶</span>
            <span>initiate_collaboration.exe</span>
          </div>
          <p className={styles.description}>
            Ready to transform your vision into reality? Let's build something extraordinary together.
            From concept to deployment, I'll be your technical partner in creating digital experiences that matter.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <div className={styles.servicesSection}>
              <div className={styles.servicesCard}>
                <div className={styles.servicesBg}></div>
                <div className={styles.servicesContent}>
                  <div className={styles.servicesHeader}>
                    <div className={styles.statusDot}></div>
                    <span className={styles.statusText}>SERVICES_AVAILABLE</span>
                  </div>

                  <div className={styles.servicesGrid}>
                    {services.map((service) => (
                      <div key={service.title} className={styles.serviceItem}>
                        <div className={styles.serviceIcon}>
                          {service.icon}
                        </div>
                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                        <p className={styles.serviceDesc}>{service.desc}</p>
                        <div className={styles.servicePrice}>{service.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.processSection}>
              <h3 className={styles.processTitle}>
                <span className={styles.arrow}>{'>'}</span>
                <span>Development Process</span>
              </h3>

              {processSteps.map((phase) => (
                <div key={phase.step} className={styles.processStep}>
                  <div className={styles.stepNumber}>
                    {phase.step}
                  </div>
                  <div className={styles.stepContent}>
                    <h4 className={styles.stepTitle}>
                      <span>{phase.icon}</span>
                      <span>{phase.title}</span>
                    </h4>
                    <p className={styles.stepDesc}>{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
             <div className={styles.contactCards}>
              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>📧</div>
                <div className={styles.contactTitle}>Email</div>
                <div className={styles.contactInfo}>shamtarani05@gmail.com</div>
              </div>
              <div className={`${styles.contactCard} ${styles.discord}`}>
                <div className={styles.contactIcon}>💬</div>
                <div className={styles.contactTitle}>Whatsapp</div>
                <div className={styles.contactInfo}>+923428008672</div>
              </div>
            </div>
          </div>
          

          <div className={styles.rightColumn}>
            <div className={styles.formContainer}>
              <div className={styles.formBg}></div>
              <div className={styles.form}>
                <div className={styles.terminalHeader}>
                  <div className={styles.terminalButtons}>
                    <div className={`${styles.terminalButton} ${styles.red}`}></div>
                    <div className={`${styles.terminalButton} ${styles.yellow}`}></div>
                    <div className={`${styles.terminalButton} ${styles.green}`}></div>
                  </div>
                  <div className={styles.terminalTitle}>contact_form.exe</div>
                  <div className={styles.terminalCmd}>⌘</div>
                </div>

                <div className={styles.formContent}>
                  <div className={styles.terminalOutput}>
                    <div>shamtarani@server:~/contact$ ./initialize_project</div>
                    <div className={styles.cyan}>Initializing secure connection...</div>
                    <div className={styles.yellow}>Ready to receive transmission ✓</div>
                  </div>

                  <form 
                    className={styles.contactForm} 
                    onSubmit={handleSubmit}
                  >
                    <div className={styles.formField}>
                      <label className={styles.formLabel}>
                        <span className={styles.purple}>const</span> clientName =
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="'Your Name Here'"
                        className={styles.formInput}
                        required
                      />
                    </div>

                    <div className={styles.formField}>
                      <label className={styles.formLabel}>
                        <span className={styles.purple}>const</span> contactEmail =
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="'your.email@domain.com'"
                        className={styles.formInput}
                        required
                      />
                    </div>

                    <div className={styles.formField}>
                      <label className={styles.formLabel}>
                        <span className={styles.purple}>const</span> projectType =
                      </label>
                      <select 
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className={styles.formSelect}
                        required
                      >
                        <option value="">Select Project Type</option>
                        <option value="Web Application">Web Application</option>
                        <option value="3D Experience">3D Experience</option>
                        <option value="Desktop Application">Desktop Application</option>
                        <option value="Consulting">Consulting</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className={styles.formField}>
                      <label className={styles.formLabel}>
                        <span className={styles.purple}>const</span> budget =
                      </label>
                      <select 
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className={styles.formSelect}
                        required
                      >
                        <option value="">Select Budget Range</option>
                        <option value="$50 - $100">$50 - $100</option>
                        <option value="$100 - $250">$100 - $250</option>
                        <option value="$250 - $500">$250 - $500</option>
                        <option value="$500+">$500+</option>
                        <option value="Hourly Rate">Hourly Rate</option>
                      </select>
                    </div>

                    <div className={styles.formField}>
                      <label className={styles.formLabel}>
                        <span className={styles.purple}>const</span> timeline =
                      </label>
                      <select 
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className={styles.formSelect}
                        required
                      >
                        <option value="">Select Timeline</option>
                        <option value="ASAP">ASAP</option>
                        <option value="1 Month">1 Month</option>
                        <option value="2-3 Months">2-3 Months</option>
                        <option value="3-6 Months">3-6 Months</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>

                    <div className={styles.formField}>
                      <label className={styles.formLabel}>
                        <span className={styles.purple}>const</span> projectDetails = `
                      </label>
                      <textarea
                        name="projectDetails"
                        value={formData.projectDetails}
                        onChange={handleInputChange}
                        rows="5"
                        placeholder="Describe your project vision, goals, and any specific requirements..."
                        className={styles.formTextarea}
                        required
                      ></textarea>
                      <div className={styles.closingTick}>`;</div>
                    </div>

                    <div className={styles.submitSection}>
                      <button
                        type="submit"
                        className={styles.submitButton}
                        disabled={isSubmitting}
                      >
                        <span className={styles.buttonText}>
                          {isSubmitting ? '> Processing...' : '> Execute_Project_Request()'}
                        </span>
                        <div className={styles.buttonHover}></div>
                      </button>
                    </div>
                  </form>

                  <div className={styles.statusDisplay}>
                    <div className={styles.statusContent}>
                      <div className={styles.statusLine}>
                        <div className={`${styles.statusDot} ${styles[getStatusMessage().color]}`}></div>
                        <span>STATUS: {getStatusMessage().text}</span>
                      </div>
                      <div className={styles.statusInfo}>
                        Response time: &lt; 24 hours
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.availability}>
              <div className={styles.availabilityHeader}>
                <div className={styles.availabilityDot}></div>
                <span className={styles.availabilityText}>AVAILABLE FOR NEW PROJECTS</span>
              </div>
              <p className={styles.availabilityDesc}>
                Currently accepting new projects. Book your consultation now to secure your spot in the development queue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithMe;