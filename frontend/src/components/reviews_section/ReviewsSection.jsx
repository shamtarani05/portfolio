import React from 'react';
import styles from './ReviewsSection.module.css';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      reviewer: "Ckinfinte",
      platform: "fiverr",
      project: "",
      rating: 5,
      review: "Sham delivered an outstanding job! The quality of his work was truly exceptional — precise, professional, and exactly what I envisioned. He went above and beyond in every aspect, showing great attention to detail and creativity. Communication was smooth and easy throughout, making the whole process a pleasure. I'm extremely impressed and will definitely be working with Sham again. Highly recommended!",
      metrics: {
        communication: 5,
        quality: 5,
        value: 5
      },
      highlights: [
        "Deep understanding",
        "Politeness",
        "Went above and beyond",
        "Delivery time",
        "Quick responsiveness",
        "Language fluency",
        "Level of cooperation",
        "Proactive communication",
        "Exceeded expectations",
        "Professionalism of work",
        "Code expertise",
        "Documentation",
        "Bug free",
        "Attention to details"
      ]
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={index < rating ? styles.starFilled : styles.starEmpty}>
        {index < rating ? '★' : '☆'}
      </span>
    ));
  };

  const getPlatformIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case 'fiverr':
        return (
          <div className={styles.fiverrBadge}>
            <span className={styles.fiverrIcon}>fiverr</span>
          </div>
        );
      case 'personal':
        return (
          <div className={styles.personalBadge}>
            <span className={styles.personalIcon}>Personal</span>
          </div>
        );
      default:
        return null;
    }
  };

  const renderMetricBar = (value) => {
    return (
      <div className={styles.metricBar}>
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`${styles.metricSegment} ${index < value ? styles.metricFilled : ''}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleContainer}>
            <div className={styles.titleLine}></div>
            <h2 className={styles.title}>{'<Reviews />'}</h2>
            <div className={styles.titleLine}></div>
          </div>
          <p className={styles.subtitle}>Client Testimonials & Feedback</p>
        </div>

        <div className={styles.reviewsGrid}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <div className={styles.reviewerInfo}>
                  <div className={styles.avatar}>
                    {review.reviewer.charAt(0).toUpperCase()}
                  </div>
                  <div className={styles.reviewerDetails}>
                    <h3 className={styles.reviewerName}>{review.reviewer}</h3>
                    <p className={styles.projectName}>{review.project}</p>
                  </div>
                </div>
                {getPlatformIcon(review.platform)}
              </div>

              <div className={styles.ratingSection}>
                <div className={styles.stars}>
                  {renderStars(review.rating)}
                </div>
                <span className={styles.ratingText}>{review.rating}.0 Rating</span>
              </div>

              <div className={styles.reviewText}>
                <p>"{review.review}"</p>
              </div>

              <div className={styles.metricsSection}>
                <h4 className={styles.metricsTitle}>{'// Performance Metrics'}</h4>
                <div className={styles.metricsGrid}>
                  <div className={styles.metric}>
                    <span className={styles.metricLabel}>Communication</span>
                    {renderMetricBar(review.metrics.communication)}
                    <span className={styles.metricValue}>{review.metrics.communication}/5</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.metricLabel}>Quality</span>
                    {renderMetricBar(review.metrics.quality)}
                    <span className={styles.metricValue}>{review.metrics.quality}/5</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.metricLabel}>Value</span>
                    {renderMetricBar(review.metrics.value)}
                    <span className={styles.metricValue}>{review.metrics.value}/5</span>
                  </div>
                </div>
              </div>

              <div className={styles.highlightsSection}>
                <h4 className={styles.highlightsTitle}>{'// Things That Went Well'}</h4>
                <div className={styles.highlightsTags}>
                  {review.highlights.map((highlight, index) => (
                    <span key={index} className={styles.highlightTag}>
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
