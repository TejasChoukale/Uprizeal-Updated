// Navbar functionality
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Scroll effect for navbar
  window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
  });

  // Set active link based on current page
  const currentLocation = window.location.pathname;
  navLinks.forEach(link => {
      if (currentLocation.includes(link.getAttribute('href'))) {
          link.classList.add('active');
      }
  });

  // Add click event listeners to navigation links
  navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault();
          const targetPage = link.getAttribute('href');
          window.location.href = targetPage;
      });
  });
});

// Features section data and population
const featuresData = [
  {
      icon: 'fas fa-flask',
      title: 'Research & Development',
      description: 'Our team of experts is dedicated to developing cutting-edge pharmaceutical solutions.'
  },
  {
      icon: 'fas fa-syringe',
      title: 'Manufacturing',
      description: 'We have state-of-the-art manufacturing facilities to ensure the highest quality products.'
  },
  {
      icon: 'fas fa-truck',
      title: 'Distribution',
      description: 'Our efficient distribution network ensures timely delivery of our products worldwide.'
  },
  {
      icon: 'fas fa-briefcase',
      title: 'Business Solutions',
      description: 'We offer comprehensive business solutions to support our clients\' success.'
  },
  {
      icon: 'fas fa-graduation-cap',
      title: 'Training & Development',
      description: 'Our training programs empower our clients\' teams to stay at the forefront of the industry.'
  },
  {
      icon: 'fas fa-globe',
      title: 'Global Reach',
      description: 'With a worldwide network, we deliver our services to clients across the globe.'
  }
];

// Populate features section dynamically
const populateFeatures = () => {
  const featuresContainer = document.querySelector('.features');
  if (featuresContainer) {
      featuresContainer.innerHTML = ''; // Clear existing content
      featuresData.forEach((feature, index) => {
          const featureElement = document.createElement('div');
          featureElement.classList.add('feature');
          featureElement.classList.add('animate__animated');
          featureElement.classList.add('animate__fadeInUp');
          featureElement.style.animationDelay = `${index * 0.2}s`;
          
          featureElement.innerHTML = `
              <i class="${feature.icon}"></i>
              <h3>${feature.title}</h3>
              <p>${feature.description}</p>
          `;
          featuresContainer.appendChild(featureElement);
          
          // Add hover animation
          featureElement.addEventListener('mouseenter', () => {
              featureElement.style.transform = 'translateY(-10px)';
          });
          
          featureElement.addEventListener('mouseleave', () => {
              featureElement.style.transform = 'translateY(0)';
          });
      });
  }
};

// Initialize features on page load
document.addEventListener('DOMContentLoaded', () => {
  populateFeatures();
  
  // Add smooth scroll behavior for all internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              target.scrollIntoView({
                  behavior: 'smooth'
              });
          }
      });
  });
});

// Add intersection observer for scroll animations
const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate__fadeInUp');
              entry.target.style.opacity = '1';
          }
      });
  }, { threshold: 0.1 });

  document.querySelectorAll('.feature, .service-card, .about-card, .expertise-card, .contact-card').forEach(element => {
      element.style.opacity = '0';
      observer.observe(element);
  });
};

// Initialize intersection observer
document.addEventListener('DOMContentLoaded', observeElements);

// Add form submission handling for contact form
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Add your form submission logic here
      const formData = new FormData(contactForm);
      // Example: Log form data
      for (let [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`);
      }
      // You can add AJAX submission or other handling here
  });
}