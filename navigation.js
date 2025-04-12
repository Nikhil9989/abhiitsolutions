// Navigation component for Abhi IT Solutions
document.addEventListener('DOMContentLoaded', function() {
  // Get the root element where we'll render the navigation
  const rootElement = document.getElementById('root');
  
  // If navigation already exists, don't add it again
  if (document.getElementById('main-nav')) return;
  
  // Create the navigation element
  const navElement = document.createElement('nav');
  navElement.id = 'main-nav';
  navElement.className = 'main-navigation';
  
  // Set the navigation HTML content
  navElement.innerHTML = `
    <div class="nav-container">
      <div class="logo">
        <a href="/">
          <img src="/n22.png" alt="Abhi IT Solutions Logo" />
        </a>
      </div>
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li class="dropdown">
          <a href="/solutions">Solutions</a>
          <ul class="dropdown-menu">
            <li><a href="/solutions/cloud-services">Cloud Services</a></li>
            <li><a href="/solutions/it-consulting">IT Consulting</a></li>
            <li><a href="/solutions/digital-transformation">Digital Transformation</a></li>
          </ul>
        </li>
        <li><a href="/careers">Careers</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div class="mobile-menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  `;
  
  // Add styles for the navigation
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    .main-navigation {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: #fff;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      z-index: 1000;
      padding: 0 20px;
    }
    
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      height: 80px;
    }
    
    .logo img {
      height: 50px;
    }
    
    .nav-links {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    .nav-links li {
      position: relative;
      margin: 0 15px;
    }
    
    .nav-links a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      font-size: 16px;
      padding: 10px 0;
      transition: color 0.3s;
    }
    
    .nav-links a:hover {
      color: #0074cc;
    }
    
    .dropdown-menu {
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #fff;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      min-width: 200px;
      padding: 10px 0;
      border-radius: 4px;
      list-style: none;
      display: none;
      z-index: 10;
    }
    
    .dropdown:hover .dropdown-menu {
      display: block;
    }
    
    .dropdown-menu a {
      padding: 8px 20px;
      display: block;
    }
    
    .dropdown-menu a:hover {
      background-color: #f5f5f5;
    }
    
    .mobile-menu-toggle {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 30px;
      height: 21px;
      cursor: pointer;
    }
    
    .mobile-menu-toggle span {
      display: block;
      height: 3px;
      width: 100%;
      background-color: #333;
      border-radius: 3px;
    }
    
    @media (max-width: 768px) {
      .nav-links {
        position: fixed;
        top: 80px;
        left: 0;
        width: 100%;
        background-color: #fff;
        flex-direction: column;
        padding: 20px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        transform: translateY(-150%);
        transition: transform 0.3s ease-in-out;
        z-index: 999;
      }
      
      .nav-links.active {
        transform: translateY(0);
      }
      
      .nav-links li {
        margin: 10px 0;
      }
      
      .dropdown-menu {
        position: static;
        box-shadow: none;
        display: block;
        padding-left: 20px;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-out;
      }
      
      .dropdown.active .dropdown-menu {
        max-height: 500px;
      }
      
      .mobile-menu-toggle {
        display: flex;
      }
    }
  `;
  
  // Add event listener for mobile menu toggle
  const setupMobileMenu = () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    if (mobileMenuToggle && navLinks) {
      mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });
    }
    
    // Add event listener for dropdowns on mobile
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        }
      });
    });
  };
  
  // Insert the navigation at the beginning of the root element
  if (rootElement && rootElement.firstChild) {
    rootElement.insertBefore(navElement, rootElement.firstChild);
    document.head.appendChild(styleElement);
    setupMobileMenu();
  }

  // Set up page content depending on URL
  const setupPageContent = () => {
    const path = window.location.pathname;
    
    // Create content container if it doesn't exist
    let contentContainer = document.getElementById('page-content');
    if (!contentContainer) {
      contentContainer = document.createElement('main');
      contentContainer.id = 'page-content';
      contentContainer.style.marginTop = '100px'; // Add space for fixed navigation
      contentContainer.style.padding = '0 20px';
      contentContainer.style.maxWidth = '1200px';
      contentContainer.style.margin = '100px auto 50px';
      rootElement.appendChild(contentContainer);
    }
    
    // Clear the container
    contentContainer.innerHTML = '';
    
    // Set content based on path
    switch(path) {
      case '/about':
        contentContainer.innerHTML = `
          <h1>About Abhi IT Solutions</h1>
          <p>Abhi IT Solutions is a leading technology company providing innovative IT services and solutions for businesses of all sizes. Founded with a vision to transform the digital landscape, we've been delivering excellence since our inception.</p>
          <p>Our team of experts is passionate about technology and committed to helping our clients achieve their goals through cutting-edge solutions.</p>
          <h2>Our Mission</h2>
          <p>To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage.</p>
          <h2>Our Vision</h2>
          <p>To be the most trusted technology partner for businesses worldwide, known for our expertise, integrity, and customer-centric approach.</p>
        `;
        break;
      case '/services':
        contentContainer.innerHTML = `
          <h1>Our Services</h1>
          <div class="services-grid">
            <div class="service-card">
              <img src="/cloud-service.png" alt="Cloud Services">
              <h3>Cloud Services</h3>
              <p>Scalable and secure cloud solutions to optimize your business operations.</p>
            </div>
            <div class="service-card">
              <img src="/technology.png" alt="Custom Software Development">
              <h3>Custom Software Development</h3>
              <p>Tailored software solutions designed to meet your unique business needs.</p>
            </div>
            <div class="service-card">
              <img src="/blockchain.png" alt="Blockchain Solutions">
              <h3>Blockchain Solutions</h3>
              <p>Innovative blockchain technology to enhance security and transparency.</p>
            </div>
            <div class="service-card">
              <img src="/analysis.png" alt="Data Analytics">
              <h3>Data Analytics</h3>
              <p>Transform your data into valuable insights for informed decision-making.</p>
            </div>
          </div>
        `;
        // Add styles for service cards
        const serviceStyles = document.createElement('style');
        serviceStyles.textContent = `
          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 30px;
            margin-top: 40px;
          }
          .service-card {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            padding: 30px;
            transition: transform 0.3s ease;
          }
          .service-card:hover {
            transform: translateY(-10px);
          }
          .service-card img {
            width: 80px;
            height: 80px;
            object-fit: contain;
            margin-bottom: 20px;
          }
          .service-card h3 {
            margin: 0 0 15px;
            color: #333;
          }
          .service-card p {
            color: #666;
            line-height: 1.6;
          }
        `;
        document.head.appendChild(serviceStyles);
        break;
      case '/solutions':
        contentContainer.innerHTML = `
          <h1>Our Solutions</h1>
          <p>At Abhi IT Solutions, we provide comprehensive technology solutions tailored to meet the unique needs of our clients.</p>
          <h2>Explore Our Solutions</h2>
          <ul class="solutions-list">
            <li>
              <a href="/solutions/cloud-services">
                <h3>Cloud Services</h3>
                <p>Scalable and secure cloud infrastructure for your business needs.</p>
              </a>
            </li>
            <li>
              <a href="/solutions/it-consulting">
                <h3>IT Consulting</h3>
                <p>Expert guidance to optimize your technology investments.</p>
              </a>
            </li>
            <li>
              <a href="/solutions/digital-transformation">
                <h3>Digital Transformation</h3>
                <p>Comprehensive strategies to modernize your business operations.</p>
              </a>
            </li>
          </ul>
        `;
        // Add styles for solutions list
        const solutionsStyles = document.createElement('style');
        solutionsStyles.textContent = `
          .solutions-list {
            list-style: none;
            padding: 0;
            margin-top: 30px;
          }
          .solutions-list li {
            margin-bottom: 20px;
          }
          .solutions-list a {
            display: block;
            text-decoration: none;
            color: inherit;
            background-color: #f8f8f8;
            padding: 25px;
            border-radius: 8px;
            transition: background-color 0.3s;
          }
          .solutions-list a:hover {
            background-color: #f0f0f0;
          }
          .solutions-list h3 {
            margin: 0 0 10px;
            color: #0074cc;
          }
          .solutions-list p {
            margin: 0;
            color: #555;
          }
        `;
        document.head.appendChild(solutionsStyles);
        break;
      case '/careers':
        contentContainer.innerHTML = `
          <h1>Careers at Abhi IT Solutions</h1>
          <p>Join our talented team of professionals and be part of an innovative company that values creativity, collaboration, and growth.</p>
          <h2>Why Work With Us</h2>
          <div class="benefits-grid">
            <div class="benefit-item">
              <img src="/collaborative.png" alt="Collaborative Culture">
              <h3>Collaborative Culture</h3>
              <p>Work in a supportive environment that fosters teamwork and innovation.</p>
            </div>
            <div class="benefit-item">
              <img src="/light-bulb.png" alt="Innovation">
              <h3>Innovation</h3>
              <p>Be at the forefront of technology and contribute to cutting-edge solutions.</p>
            </div>
            <div class="benefit-item">
              <img src="/training.png" alt="Professional Development">
              <h3>Professional Development</h3>
              <p>Continuous learning opportunities to enhance your skills and advance your career.</p>
            </div>
            <div class="benefit-item">
              <img src="/shield.png" alt="Work-Life Balance">
              <h3>Work-Life Balance</h3>
              <p>Flexible work arrangements to support your personal and professional life.</p>
            </div>
          </div>
          <h2>Current Openings</h2>
          <div class="job-listings">
            <div class="job-card">
              <h3>Senior Software Developer</h3>
              <p class="job-location">Location: Remote</p>
              <p>We're looking for an experienced Software Developer to join our growing team...</p>
              <a href="/careers/senior-software-developer" class="job-link">View Details</a>
            </div>
            <div class="job-card">
              <h3>UI/UX Designer</h3>
              <p class="job-location">Location: Hybrid</p>
              <p>Join our creative team to design intuitive and engaging user interfaces...</p>
              <a href="/careers/ui-ux-designer" class="job-link">View Details</a>
            </div>
            <div class="job-card">
              <h3>Data Scientist</h3>
              <p class="job-location">Location: On-site</p>
              <p>Help us transform data into actionable insights and drive business decisions...</p>
              <a href="/careers/data-scientist" class="job-link">View Details</a>
            </div>
          </div>
        `;
        // Add styles for careers page
        const careersStyles = document.createElement('style');
        careersStyles.textContent = `
          .benefits-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 25px;
            margin: 30px 0;
          }
          .benefit-item {
            text-align: center;
            padding: 25px;
            background-color: #f8f8f8;
            border-radius: 8px;
          }
          .benefit-item img {
            width: 60px;
            height: 60px;
            margin-bottom: 15px;
          }
          .benefit-item h3 {
            margin: 0 0 10px;
            color: #333;
          }
          .benefit-item p {
            color: #666;
            line-height: 1.5;
          }
          .job-listings {
            margin-top: 30px;
          }
          .job-card {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            padding: 25px;
            margin-bottom: 20px;
          }
          .job-card h3 {
            margin: 0 0 10px;
            color: #0074cc;
          }
          .job-location {
            color: #666;
            font-style: italic;
            margin-bottom: 15px;
          }
          .job-link {
            display: inline-block;
            background-color: #0074cc;
            color: #fff;
            padding: 8px 20px;
            border-radius: 4px;
            text-decoration: none;
            margin-top: 15px;
            transition: background-color 0.3s;
          }
          .job-link:hover {
            background-color: #005ca3;
          }
        `;
        document.head.appendChild(careersStyles);
        break;
      case '/contact':
        contentContainer.innerHTML = `
          <h1>Contact Us</h1>
          <div class="contact-container">
            <div class="contact-info">
              <h2>Get in Touch</h2>
              <p>We'd love to hear from you! Contact us for any inquiries, support, or to discuss how we can help your business grow.</p>
              <div class="info-item">
                <strong>Address:</strong>
                <p>123 Tech Park, Innovation Street, Bangalore, India 560001</p>
              </div>
              <div class="info-item">
                <strong>Email:</strong>
                <p><a href="mailto:info@abhiitsolutions.com">info@abhiitsolutions.com</a></p>
              </div>
              <div class="info-item">
                <strong>Phone:</strong>
                <p><a href="tel:+919876543210">+91 9876 543 210</a></p>
              </div>
              <div class="social-links">
                <a href="https://facebook.com" target="_blank"><img src="/facebook.png" alt="Facebook"></a>
                <a href="https://twitter.com" target="_blank"><img src="/twitter.png" alt="Twitter"></a>
                <a href="https://linkedin.com" target="_blank"><img src="/linkedin.png" alt="LinkedIn"></a>
                <a href="https://instagram.com" target="_blank"><img src="/instagram.png" alt="Instagram"></a>
              </div>
            </div>
            <div class="contact-form">
              <h2>Send us a Message</h2>
              <form id="contactForm" action="/mailer/send.php" method="POST">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                  <label for="phone">Phone (Optional)</label>
                  <input type="tel" id="phone" name="phone">
                </div>
                <div class="form-group">
                  <label for="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required>
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" class="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        `;
        // Add styles for contact page
        const contactStyles = document.createElement('style');
        contactStyles.textContent = `
          .contact-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin-top: 30px;
          }
          .contact-info, .contact-form {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
            padding: 30px;
          }
          .info-item {
            margin-bottom: 20px;
          }
          .info-item strong {
            display: block;
            margin-bottom: 5px;
            color: #0074cc;
          }
          .info-item p {
            margin: 0;
            color: #555;
          }
          .info-item a {
            color: #555;
            text-decoration: none;
            transition: color 0.3s;
          }
          .info-item a:hover {
            color: #0074cc;
          }
          .social-links {
            display: flex;
            gap: 15px;
            margin-top: 25px;
          }
          .social-links img {
            width: 30px;
            height: 30px;
            transition: transform 0.3s;
          }
          .social-links img:hover {
            transform: scale(1.15);
          }
          .form-group {
            margin-bottom: 20px;
          }
          .form-group label {
            display: block;
            margin-bottom: 5px;
            color: #333;
          }
          .form-group input, .form-group textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-family: inherit;
            font-size: 16px;
          }
          .form-group textarea {
            resize: vertical;
          }
          .submit-btn {
            background-color: #0074cc;
            color: #fff;
            border: none;
            border-radius: 4px;
            padding: 12px 25px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          .submit-btn:hover {
            background-color: #005ca3;
          }
          @media (max-width: 768px) {
            .contact-container {
              grid-template-columns: 1fr;
            }
          }
        `;
        document.head.appendChild(contactStyles);
        
        // Add form submission logic
        setTimeout(() => {
          const contactForm = document.getElementById('contactForm');
          if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
              e.preventDefault();
              const formData = new FormData(this);
              const data = {};
              formData.forEach((value, key) => {
                data[key] = value;
              });
              
              fetch('/mailer/send.php', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              })
              .then(response => response.json())
              .then(result => {
                if (result.success) {
                  alert('Thank you for your message. We will get back to you shortly.');
                  contactForm.reset();
                } else {
                  alert('Sorry, there was an error sending your message. Please try again later.');
                }
              })
              .catch(error => {
                console.error('Error:', error);
                alert('Sorry, there was an error sending your message. Please try again later.');
              });
            });
          }
        }, 500);
        break;
      default:
        // Home page or fallback
        // Can define home page content here if needed
        break;
    }
  };
  
  // Run page setup on load and when history state changes
  setupPageContent();
  window.addEventListener('popstate', setupPageContent);
  
  // Add click event listeners to all navigation links to handle client-side routing
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      // Skip if it's a dropdown or external link
      if (this.parentElement.classList.contains('dropdown') && window.innerWidth > 768 || 
          this.getAttribute('href').startsWith('http')) {
        return;
      }
      
      e.preventDefault();
      const url = this.getAttribute('href');
      window.history.pushState({}, '', url);
      setupPageContent();
    });
  });
});
