// Home page content for Abhi IT Solutions
document.addEventListener('DOMContentLoaded', function() {
  // Only run if we're on the homepage
  if (window.location.pathname === '/' || window.location.pathname === '') {
    // Get the root element where we'll render the home content
    const rootElement = document.getElementById('root');
    
    // If home content already exists, don't add it again
    if (document.getElementById('home-content')) return;
    
    // Create the home content element
    const homeElement = document.createElement('div');
    homeElement.id = 'home-content';
    
    // Set the home content HTML
    homeElement.innerHTML = `
      <div class="hero-section">
        <div class="hero-content">
          <h1>Innovative IT Solutions for Your Business</h1>
          <p>Empowering businesses with cutting-edge technology solutions to drive growth and efficiency.</p>
          <div class="hero-buttons">
            <a href="/services" class="primary-btn">Our Services</a>
            <a href="/contact" class="secondary-btn">Contact Us</a>
          </div>
        </div>
        <div class="hero-image">
          <img src="/photo-1521737604893-d14cc237f11d.jpeg" alt="Abhi IT Solutions Team Working">
        </div>
      </div>
      
      <div class="services-overview">
        <h2>Our Services</h2>
        <div class="service-cards">
          <div class="service-card">
            <img src="/cloud-service.png" alt="Cloud Solutions">
            <h3>Cloud Solutions</h3>
            <p>Scalable and secure cloud infrastructure to optimize your business operations.</p>
            <a href="/services#cloud-solutions" class="learn-more">Learn More</a>
          </div>
          <div class="service-card">
            <img src="/technology.png" alt="Software Development">
            <h3>Software Development</h3>
            <p>Custom software solutions designed to meet your unique business requirements.</p>
            <a href="/services#software-development" class="learn-more">Learn More</a>
          </div>
          <div class="service-card">
            <img src="/analysis.png" alt="Data Analytics">
            <h3>Data Analytics</h3>
            <p>Transform your data into valuable insights for informed decision making.</p>
            <a href="/services#data-analytics" class="learn-more">Learn More</a>
          </div>
          <div class="service-card">
            <img src="/shield.png" alt="Cybersecurity">
            <h3>Cybersecurity</h3>
            <p>Protect your business from threats with comprehensive security solutions.</p>
            <a href="/services#cybersecurity" class="learn-more">Learn More</a>
          </div>
        </div>
      </div>
      
      <div class="about-section">
        <div class="about-image">
          <img src="/meeting.jpg" alt="Abhi IT Solutions Team">
        </div>
        <div class="about-content">
          <h2>About Abhi IT Solutions</h2>
          <p>Abhi IT Solutions is a leading technology company providing innovative IT services and solutions for businesses of all sizes. Founded with a vision to transform the digital landscape, we've been delivering excellence since our inception.</p>
          <p>Our team of experts is passionate about technology and committed to helping our clients achieve their goals through cutting-edge solutions.</p>
          <div class="stats">
            <div class="stat-item">
              <span class="stat-number">500+</span>
              <span class="stat-label">Projects Completed</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">100+</span>
              <span class="stat-label">Happy Clients</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">50+</span>
              <span class="stat-label">Expert Team Members</span>
            </div>
          </div>
          <a href="/about" class="primary-btn">Read More</a>
        </div>
      </div>
      
      <div class="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div class="testimonials">
          <div class="testimonial">
            <div class="testimonial-content">
              <p>"Abhi IT Solutions transformed our business with their innovative cloud solutions. Their team's expertise and commitment to excellence made all the difference."</p>
            </div>
            <div class="testimonial-author">
              <img src="/avatar.png" alt="Client Avatar">
              <div>
                <h4>John Smith</h4>
                <p>CEO, Tech Innovations</p>
              </div>
            </div>
          </div>
          <div class="testimonial">
            <div class="testimonial-content">
              <p>"Working with Abhi IT Solutions was a game-changer for our company. Their custom software development helped us streamline operations and increase efficiency."</p>
            </div>
            <div class="testimonial-author">
              <img src="/avatar.png" alt="Client Avatar">
              <div>
                <h4>Sarah Johnson</h4>
                <p>CTO, Global Enterprises</p>
              </div>
            </div>
          </div>
          <div class="testimonial">
            <div class="testimonial-content">
              <p>"The data analytics solution provided by Abhi IT Solutions gave us valuable insights that directly contributed to our business growth and improved decision making."</p>
            </div>
            <div class="testimonial-author">
              <img src="/avatar.png" alt="Client Avatar">
              <div>
                <h4>Michael Brown</h4>
                <p>Data Director, Future Corp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="cta-section">
        <h2>Ready to Transform Your Business?</h2>
        <p>Get in touch with us today to discuss how Abhi IT Solutions can help you achieve your business goals.</p>
        <a href="/contact" class="primary-btn">Contact Us</a>
      </div>
    `;
    
    // Create styles for the home page
    const homeStyles = document.createElement('style');
    homeStyles.textContent = `
      #home-content {
        padding-top: 80px; /* Space for the navigation */
      }
      
      .hero-section {
        display: flex;
        align-items: center;
        min-height: 600px;
        padding: 60px 40px;
        background-color: #f8f9fa;
        margin-bottom: 60px;
      }
      
      .hero-content {
        flex: 1;
        padding-right: 40px;
      }
      
      .hero-content h1 {
        font-size: 3.2rem;
        margin-bottom: 20px;
        color: #333;
        line-height: 1.2;
      }
      
      .hero-content p {
        font-size: 1.2rem;
        color: #666;
        margin-bottom: 40px;
        max-width: 600px;
      }
      
      .hero-buttons {
        display: flex;
        gap: 20px;
        margin-top: 30px;
      }
      
      .primary-btn, .secondary-btn {
        display: inline-block;
        padding: 12px 30px;
        border-radius: 5px;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
      }
      
      .primary-btn {
        background-color: #0074cc;
        color: white;
      }
      
      .primary-btn:hover {
        background-color: #005ca3;
      }
      
      .secondary-btn {
        background-color: transparent;
        color: #0074cc;
        border: 2px solid #0074cc;
      }
      
      .secondary-btn:hover {
        background-color: rgba(0, 116, 204, 0.1);
      }
      
      .hero-image {
        flex: 1;
      }
      
      .hero-image img {
        width: 100%;
        max-width: 500px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      }
      
      .services-overview, .testimonials-section {
        padding: 80px 40px;
        text-align: center;
        margin-bottom: 60px;
      }
      
      .services-overview h2, .about-section h2, .testimonials-section h2 {
        font-size: 2.5rem;
        margin-bottom: 50px;
        position: relative;
        display: inline-block;
      }
      
      .services-overview h2:after, .about-section h2:after, .testimonials-section h2:after {
        content: '';
        display: block;
        width: 60px;
        height: 4px;
        background-color: #0074cc;
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
      }
      
      .service-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 30px;
        margin-top: 40px;
      }
      
      .service-card {
        background-color: white;
        border-radius: 10px;
        padding: 30px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      
      .service-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      }
      
      .service-card img {
        width: 70px;
        height: 70px;
        margin-bottom: 20px;
      }
      
      .service-card h3 {
        margin-bottom: 15px;
        color: #333;
        font-size: 1.4rem;
      }
      
      .service-card p {
        color: #666;
        margin-bottom: 20px;
        line-height: 1.6;
      }
      
      .learn-more {
        color: #0074cc;
        text-decoration: none;
        font-weight: 600;
        position: relative;
        transition: color 0.3s;
      }
      
      .learn-more:after {
        content: '→';
        margin-left: 5px;
        transition: margin-left 0.3s;
      }
      
      .learn-more:hover {
        color: #005ca3;
      }
      
      .learn-more:hover:after {
        margin-left: 10px;
      }
      
      .about-section {
        display: flex;
        align-items: center;
        padding: 80px 40px;
        background-color: #f8f9fa;
        margin-bottom: 60px;
      }
      
      .about-image {
        flex: 1;
        margin-right: 40px;
      }
      
      .about-image img {
        width: 100%;
        max-width: 500px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      }
      
      .about-content {
        flex: 1;
      }
      
      .about-content h2 {
        text-align: left;
        margin-bottom: 30px;
      }
      
      .about-content h2:after {
        left: 0;
        transform: none;
      }
      
      .about-content p {
        color: #666;
        line-height: 1.7;
        margin-bottom: 20px;
      }
      
      .stats {
        display: flex;
        justify-content: space-between;
        margin: 40px 0;
      }
      
      .stat-item {
        text-align: center;
      }
      
      .stat-number {
        display: block;
        font-size: 2.5rem;
        font-weight: 700;
        color: #0074cc;
        margin-bottom: 5px;
      }
      
      .stat-label {
        color: #666;
        font-size: 0.9rem;
      }
      
      .testimonials {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
        margin-top: 40px;
      }
      
      .testimonial {
        background-color: white;
        border-radius: 10px;
        padding: 30px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        text-align: left;
        transition: transform 0.3s ease;
      }
      
      .testimonial:hover {
        transform: translateY(-5px);
      }
      
      .testimonial-content {
        margin-bottom: 20px;
      }
      
      .testimonial-content p {
        font-style: italic;
        color: #555;
        line-height: 1.7;
      }
      
      .testimonial-content p:before, .testimonial-content p:after {
        content: '"';
        color: #0074cc;
        font-size: 1.5rem;
      }
      
      .testimonial-author {
        display: flex;
        align-items: center;
      }
      
      .testimonial-author img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 15px;
      }
      
      .testimonial-author h4 {
        margin: 0;
        color: #333;
        font-size: 1.1rem;
      }
      
      .testimonial-author p {
        margin: 0;
        color: #777;
        font-size: 0.9rem;
      }
      
      .cta-section {
        background-color: #0074cc;
        color: white;
        text-align: center;
        padding: 80px 40px;
        border-radius: 10px;
        margin: 0 40px 80px;
      }
      
      .cta-section h2 {
        font-size: 2.5rem;
        margin-bottom: 20px;
      }
      
      .cta-section p {
        font-size: 1.2rem;
        max-width: 700px;
        margin: 0 auto 40px;
      }
      
      .cta-section .primary-btn {
        background-color: white;
        color: #0074cc;
        padding: 15px 40px;
        font-size: 1.1rem;
      }
      
      .cta-section .primary-btn:hover {
        background-color: rgba(255, 255, 255, 0.9);
      }
      
      /* Responsive adjustments */
      @media (max-width: 992px) {
        .hero-section, .about-section {
          flex-direction: column;
          text-align: center;
          padding: 40px 20px;
        }
        
        .hero-content, .about-content {
          padding-right: 0;
          margin-bottom: 40px;
        }
        
        .hero-content p, .about-content p {
          margin-left: auto;
          margin-right: auto;
        }
        
        .hero-buttons {
          justify-content: center;
        }
        
        .hero-image, .about-image {
          margin-right: 0;
        }
        
        .about-content h2 {
          text-align: center;
        }
        
        .about-content h2:after {
          left: 50%;
          transform: translateX(-50%);
        }
        
        .stats {
          flex-direction: column;
          gap: 20px;
        }
        
        .services-overview, .testimonials-section {
          padding: 60px 20px;
        }
        
        .cta-section {
          margin: 0 20px 60px;
          padding: 60px 20px;
        }
      }
    `;
    
    // Add styles to head
    document.head.appendChild(homeStyles);
    
    // Add the home content to the page
    rootElement.appendChild(homeElement);
  }
});
