/**
 * ALTA PERFORMANCE FITNESS - Main JavaScript
 * Features: Cookie consent, scroll tracking, form validation, smooth scroll
 */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  
  // ========================================
  // COOKIE CONSENT (LGPD)
  // ========================================
  const cookieConsent = document.getElementById('cookieConsent');
  const acceptCookies = document.getElementById('acceptCookies');
  const rejectCookies = document.getElementById('rejectCookies');
  
  // Check if user has already made a choice
  if (!localStorage.getItem('cookieConsent')) {
    // Show cookie banner after 1 second
    setTimeout(() => {
      cookieConsent.classList.remove('d-none');
    }, 1000);
  }
  
  // Accept cookies
  if (acceptCookies) {
    acceptCookies.addEventListener('click', function() {
      localStorage.setItem('cookieConsent', 'accepted');
      cookieConsent.classList.add('d-none');
      // Enable tracking scripts if needed
      enableTracking();
    });
  }
  
  // Reject cookies
  if (rejectCookies) {
    rejectCookies.addEventListener('click', function() {
      localStorage.setItem('cookieConsent', 'rejected');
      cookieConsent.classList.add('d-none');
      // Disable tracking scripts
      disableTracking();
    });
  }
  
  function enableTracking() {
    // Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
    console.log('Tracking enabled');
  }
  
  function disableTracking() {
    // Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
    console.log('Tracking disabled');
  }
  
  // ========================================
  // SCROLL TRACKING
  // ========================================
  let scrollPercentage = 0;
  let scrollTracked = {
    '25': false,
    '50': false,
    '75': false,
    '90': false
  };
  
  window.addEventListener('scroll', function() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    scrollPercentage = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);
    
    // Track scroll milestones
    ['25', '50', '75', '90'].forEach(milestone => {
      if (scrollPercentage >= parseInt(milestone) && !scrollTracked[milestone]) {
        scrollTracked[milestone] = true;
        
        // Send to analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', 'scroll', {
            'event_category': 'Engagement',
            'event_label': `Scroll ${milestone}%`,
            'value': parseInt(milestone)
          });
        }
        
        if (typeof fbq !== 'undefined') {
          fbq('trackCustom', 'PageScroll', {
            scroll_depth: `${milestone}%`
          });
        }
      }
    });
  });
  
  // ========================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Don't prevent default for accordion toggles or similar
      if (href === '#' || this.getAttribute('data-bs-toggle')) {
        return;
      }
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const offsetTop = target.offsetTop - 70; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // ========================================
  // NAVBAR SCROLL EFFECT
  // ========================================
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('shadow');
    } else {
      navbar.classList.remove('shadow');
    }
  });
  
  // ========================================
  // LAZY LOADING FALLBACK (for older browsers)
  // ========================================
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
  
  // ========================================
  // TRACK TIME ON PAGE
  // ========================================
  let startTime = Date.now();
  
  window.addEventListener('beforeunload', function() {
    const timeSpent = Math.round((Date.now() - startTime) / 1000); // seconds
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'timing_complete', {
        'name': 'page_view',
        'value': timeSpent,
        'event_category': 'Engagement'
      });
    }
  });
  
  // ========================================
  // FORM VALIDATION (if forms are added)
  // ========================================
  const forms = document.querySelectorAll('.needs-validation');
  
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        // Track form submission
        if (typeof gtag !== 'undefined') {
          gtag('event', 'generate_lead', {
            'event_category': 'Lead',
            'event_label': form.id || 'unknown_form'
          });
        }
        
        if (typeof fbq !== 'undefined') {
          fbq('track', 'Lead', {
            content_name: form.id || 'unknown_form'
          });
        }
      }
      
      form.classList.add('was-validated');
    }, false);
  });
  
  // ========================================
  // DETECT MOBILE DEVICE
  // ========================================
  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  
  if (isMobile()) {
    document.body.classList.add('is-mobile');
  }
  
  // ========================================
  // ANIMATE ON SCROLL (simple version)
  // ========================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  // Observe elements with animate class
  document.querySelectorAll('.card, .icon-box').forEach(el => {
    observer.observe(el);
  });
  
  // ========================================
  // PREVENT SPAM CLICKS ON CTAs
  // ========================================
  const ctaButtons = document.querySelectorAll('a[onclick*="trackEvent"]');
  ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      if (this.classList.contains('clicked')) {
        e.preventDefault();
        return false;
      }
      this.classList.add('clicked');
      setTimeout(() => {
        this.classList.remove('clicked');
      }, 2000);
    });
  });
  
  // ========================================
  // DYNAMIC SOCIAL PROOF (example)
  // ========================================
  function updateSocialProof() {
    const viewers = Math.floor(Math.random() * 20) + 80; // Random between 80-99
    const viewerElement = document.querySelector('.cta-final strong');
    if (viewerElement && viewerElement.textContent.includes('pessoas')) {
      viewerElement.textContent = viewers + ' pessoas';
    }
  }
  
  // Update every 15 seconds
  setInterval(updateSocialProof, 15000);
  
  // ========================================
  // CONSOLE EASTER EGG
  // ========================================
  console.log('%c🏋️ ALTA PERFORMANCE FITNESS 🏋️', 'font-size: 20px; font-weight: bold; color: #FFC107; background: #000; padding: 10px;');
  console.log('%cInteressado em trabalhar conosco? Envie seu portfólio para: contato@altaperformance.com.br', 'font-size: 12px; color: #666;');
  
});

// ========================================
// SERVICE WORKER (for PWA - optional)
// ========================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Uncomment when service worker is ready
    // navigator.serviceWorker.register('/sw.js')
    //   .then(reg => console.log('Service Worker registered'))
    //   .catch(err => console.log('Service Worker registration failed'));
  });
}
