// ===================================
// DYNAMIC CONTENT RENDERING FROM DATA FILE
// ===================================

// Pagination Configuration
const ITEMS_PER_PAGE = 4;

// Render Navigation
function renderNavigation() {
    const logo = document.getElementById('logo');
    logo.innerHTML = `${websiteData.brand.name}<span></span>`;
    
    const navMenu = document.getElementById('navMenu');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navMenu.innerHTML = websiteData.navigation.map(item => {
        const isActive = currentPage === item.href.split('#')[0] || 
                        (currentPage === '' && item.href === 'index.html');
        const activeClass = isActive ? ' style="color: var(--color-primary)"' : '';
        return `<a href="${item.href}" class="nav-link"${activeClass}>${item.label}</a>`;
    }).join('');
}

// Render Hero Section
function renderHero() {
    const heroTitle = document.getElementById('heroTitle');
    heroTitle.innerHTML = websiteData.brand.tagline.replace(/(\w+)$/, '<span class="gradient-text">$1</span>');
    
    const heroSubtitle = document.getElementById('heroSubtitle');
    heroSubtitle.textContent = websiteData.brand.description;
}

// Render Extension Cards
function renderExtensions(page = 1) {
    const grid = document.getElementById('extensionsGrid');
    
    if (websiteData.extensions.length === 0) {
        grid.innerHTML = `
            <div class="placeholder-content" style="grid-column: 1 / -1; text-align: center; padding: 20px 20px;">
                <h3 style="font-size: 1rem; margin-bottom: 10px; color: var(--color-text-light);">Chrome Extensions Coming Soon</h3>
                <p style="color: var(--color-text-light); font-size: 1rem;">We're working on amazing browser extensions. Stay tuned!</p>
            </div>
        `;
        return;
    }
    
    // Calculate pagination
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedExtensions = websiteData.extensions.slice(startIndex, endIndex);
    
    grid.innerHTML = paginatedExtensions.map(ext => `
        <div class="product-card animate-on-scroll">
            <div class="card-image">
                <img src="${ext.image}" alt="${ext.title}">
                <div class="card-badge">Extension</div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${ext.title}</h3>
                <p class="card-description">${ext.description}</p>
                <ul class="card-features">
                    ${ext.features.map(f => `<li>✓ ${f}</li>`).join('')}
                </ul>
                <div class="card-actions">
                    <a href="${ext.chromeStoreLink}" class="btn btn-primary btn-small">View on Chrome Store</a>
                    <a href="${ext.learnMoreLink}" class="btn btn-outline btn-small">Learn More</a>
                </div>
            </div>
        </div>
    `).join('');
    
    // Render pagination
    renderPagination('extensionsGrid', websiteData.extensions.length, page, 'extensions');
}

// Render Open Source Cards
function renderOpenSource(page = 1) {
    const grid = document.getElementById('openSourceGrid');
    
    if (websiteData.openSource.length === 0) {
        grid.innerHTML = `
            <div class="placeholder-content" style="grid-column: 1 / -1; text-align: center; padding: 20px 20px;">
                <h3 style="font-size: 1rem; margin-bottom: 10px; color: var(--color-text-light);">Open Source Projects Coming Soon</h3>
                <p style="color: var(--color-text-light); font-size: 1rem;">Exciting open source projects are in development. Check back soon!</p>
            </div>
        `;
        return;
    }
    
    // Calculate pagination
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedProjects = websiteData.openSource.slice(startIndex, endIndex);
    
    grid.innerHTML = paginatedProjects.map(project => `
        <div class="product-card animate-on-scroll">
            <div class="card-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="card-badge github">Open Source</div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${project.title}</h3>
                <p class="card-description">${project.description}</p>
                <div class="tech-stack">
                    ${project.techStack.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                </div>
                <div class="card-stats">
                    <span class="stat">⭐ ${project.stars} stars</span>
                    <span class="stat">🍴 ${project.forks} forks</span>
                </div>
                <div class="card-actions">
                    <a href="${project.githubLink}" class="btn btn-primary btn-small">View on GitHub</a>
                    <a href="${project.docsLink}" class="btn btn-outline btn-small">Documentation</a>
                </div>
            </div>
        </div>
    `).join('');
    
    // Render pagination
    renderPagination('openSourceGrid', websiteData.openSource.length, page, 'opensource');
}

// Render Solutions Cards
function renderSolutions() {
    const grid = document.getElementById('solutionsGrid');
    
    if (!grid) return; // Skip if not on homepage
    
    if (websiteData.solutions.length === 0) {
        grid.innerHTML = `
            <div class="placeholder-content" style="grid-column: 1 / -1; text-align: center; padding: 20px 20px;">
                <h3 style="font-size: 1rem; margin-bottom: 10px; color: var(--color-text-light);">Custom Solutions Coming Soon</h3>
                <p style="color: var(--color-text-light); font-size: 1rem;">Tailored software solutions are being crafted. Stay tuned!</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = websiteData.solutions.map(solution => `
        <div class="product-card animate-on-scroll">
            <div class="card-image">
                <img src="${solution.image}" alt="${solution.title}">
                <div class="card-badge solution">Solution</div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${solution.title}</h3>
                <p class="card-description">${solution.description}</p>
                <ul class="card-features">
                    ${solution.features.map(f => `<li>✓ ${f}</li>`).join('')}
                </ul>
                <div class="card-actions">
                    <a href="${solution.demoLink}" class="btn btn-primary btn-small">View Demo</a>
                    <a href="${solution.contactLink}" class="btn btn-outline btn-small">Contact Sales</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Render Services Cards
function renderServices() {
    const grid = document.getElementById('servicesGrid');
    
    if (!grid) return; // Skip if not on services page
    
    if (websiteData.services.length === 0) {
        grid.innerHTML = `
            <div class="placeholder-content" style="grid-column: 1 / -1; text-align: center; padding: 20px 20px;">
                <h3 style="font-size: 1rem; margin-bottom: 10px; color: var(--color-text-light);">Services Coming Soon</h3>
                <p style="color: var(--color-text-light); font-size: 1rem;">We're preparing our service offerings. Check back soon!</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = websiteData.services.map(service => `
        <div class="product-card animate-on-scroll">
            <div class="card-image">
                <img src="${service.image}" alt="${service.title}">
                <div class="card-badge service">${service.icon}</div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${service.title}</h3>
                <p class="card-description">${service.description}</p>
                <ul class="card-features">
                    ${service.features.map(f => `<li>✓ ${f}</li>`).join('')}
                </ul>
                <div class="card-actions">
                    <a href="index.html#contact" class="btn btn-primary btn-small btn-full">Get Started</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Render Contact Details
function renderContactDetails() {
    const contactDetails = document.getElementById('contactDetails');
    contactDetails.innerHTML = `
        <div class="contact-item">
            <div class="contact-icon">📧</div>
            <div>
                <h4>Email</h4>
                <p>${websiteData.brand.email}</p>
            </div>
        </div>
        <div class="contact-item">
            <div class="contact-icon">🌐</div>
            <div>
                <h4>Website</h4>
                <p>${websiteData.brand.website}</p>
            </div>
        </div>
        <div class="contact-item">
            <div class="contact-icon">💼</div>
            <div>
                <h4>LinkedIn</h4>
                <p>${websiteData.brand.linkedin}</p>
            </div>
        </div>
    `;
}

// Render Footer
function renderFooter() {
    const footerBrand = document.getElementById('footerBrand');
    if (!footerBrand) return;
    
    footerBrand.innerHTML = `${websiteData.brand.name}<span></span>`;
    
    const footerDescription = document.getElementById('footerDescription');
    footerDescription.textContent = 'Building amazing digital products and solutions for the modern web.';
    
    const footerLinks = document.getElementById('footerLinks');
    footerLinks.innerHTML = websiteData.navigation.map(item => 
        `<li><a href="${item.href}">${item.label}</a></li>`
    ).join('');
    
    const socialLinks = document.getElementById('socialLinks');
    socialLinks.innerHTML = websiteData.social.map(social => 
        `<a href="${social.url}" class="social-link">${social.name}</a>`
    ).join('');
    
    const footerCopyright = document.getElementById('footerCopyright');
    footerCopyright.textContent = `© ${websiteData.brand.copyright} ${websiteData.brand.name}. All rights reserved.`;
}

// Render Pagination
function renderPagination(gridId, totalItems, currentPage, pageType) {
    const paginationContainer = document.getElementById('pagination');
    if (!paginationContainer) return;
    
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    
    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }
    
    let paginationHTML = '<div class="pagination-container">';
    
    // Previous button
    if (currentPage > 1) {
        paginationHTML += `<button class="pagination-btn" onclick="window.goToPage(${currentPage - 1}, '${pageType}')">« Previous</button>`;
    }
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === currentPage) {
            paginationHTML += `<button class="pagination-btn active" onclick="window.goToPage(${i}, '${pageType}')">${i}</button>`;
        } else {
            paginationHTML += `<button class="pagination-btn" onclick="window.goToPage(${i}, '${pageType}')">${i}</button>`;
        }
    }
    
    // Next button
    if (currentPage < totalPages) {
        paginationHTML += `<button class="pagination-btn" onclick="window.goToPage(${currentPage + 1}, '${pageType}')">Next »</button>`;
    }
    
    paginationHTML += '</div>';
    paginationContainer.innerHTML = paginationHTML;
}

// Global function to handle page navigation
window.goToPage = function(page, pageType) {
    if (pageType === 'extensions') {
        renderExtensions(page);
    } else if (pageType === 'opensource') {
        renderOpenSource(page);
    }
    
    // Reinitialize animations for new content
    setTimeout(() => initializeAnimations(), 50);
    
    // Scroll to top of grid
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Render About Page Content
function renderAboutPage() {
    const aboutIntro = document.getElementById('aboutIntro');
    if (aboutIntro) {
        aboutIntro.innerHTML = `
            <h2 class="section-title" style="margin-bottom: 20px;">${websiteData.about.headline}</h2>
            <p style="font-size: 1rem; line-height: 1.8; color: var(--color-text-light);">${websiteData.about.description}</p>
        `;
    }
    
    const aboutStats = document.getElementById('aboutStats');
    if (aboutStats) {
        aboutStats.innerHTML = websiteData.about.stats.map(stat => `
            <div class="stat-card">
                <div class="stat-value">${stat.value}</div>
                <div class="stat-label">${stat.label}</div>
            </div>
        `).join('');
    }
    
    const missionVision = document.getElementById('missionVision');
    if (missionVision) {
        missionVision.innerHTML = `
            <div class="mv-card">
                <div class="mv-icon">🎯</div>
                <h3>Our Mission</h3>
                <p>${websiteData.about.mission}</p>
            </div>
            <div class="mv-card">
                <div class="mv-icon">👁️</div>
                <h3>Our Vision</h3>
                <p>${websiteData.about.vision}</p>
            </div>
        `;
    }
    
    const valuesGrid = document.getElementById('valuesGrid');
    if (valuesGrid) {
        valuesGrid.innerHTML = websiteData.about.values.map(value => `
            <div class="value-card animate-on-scroll">
                <div class="value-icon">${value.icon}</div>
                <h3>${value.title}</h3>
                <p>${value.description}</p>
            </div>
        `).join('');
    }
    
    const teamGrid = document.getElementById('teamGrid');
    if (teamGrid) {
        teamGrid.innerHTML = websiteData.about.team.map(member => `
            <div class="team-card animate-on-scroll">
                <div class="team-image">
                    <img src="${member.image}" alt="${member.name}">
                </div>
                <div class="team-info">
                    <h3>${member.name}</h3>
                    <p class="team-role">${member.role}</p>
                    <p class="team-bio">${member.bio}</p>
                    <div class="team-social">
                        <a href="${member.social.github}" class="social-icon">GitHub</a>
                        <a href="${member.social.linkedin}" class="social-icon">LinkedIn</a>
                        <a href="${member.social.twitter}" class="social-icon">Twitter</a>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Initialize all dynamic content
function initializeDynamicContent() {
    console.log('Initializing dynamic content...');
    console.log('Website data:', websiteData);
    
    // Get current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    renderNavigation();
    
    // Only render homepage-specific content on index.html
    if (currentPage === 'index.html' || currentPage === '') {
        renderHero();
        renderExtensions();
        renderOpenSource();
        renderSolutions();
        renderContactDetails();
    }
    
    // Render footer on all pages
    renderFooter();
    
    console.log('Dynamic content initialized successfully!');
}

// ===================================
// NAVIGATION FUNCTIONALITY
// ===================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// SCROLL ANIMATIONS
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Function to initialize animations (call after dynamic content is rendered)
function initializeAnimations() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.05}s`; // Reduced from 0.1s to 0.05s
        observer.observe(el);
    });
    
    // Trigger animations for elements already in view immediately
    setTimeout(() => {
        animateElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('visible');
            }
        });
    }, 50); // Reduced from 100ms to 50ms
}

// ===================================
// SMOOTH SCROLL FOR NAVIGATION
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// CONTACT FORM HANDLING
// ===================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Basic validation
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission (replace with actual API call)
        console.log('Form submitted:', formData);
        showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// ===================================
// NOTIFICATION SYSTEM
// ===================================

function showNotification(message, type = 'success') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#48bb78' : '#f56565'};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 15px;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add notification to body
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;
    
    closeButton.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Add notification animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// ACTIVE NAVIGATION LINK HIGHLIGHT
// ===================================

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--color-primary)';
        } else {
            link.style.color = '';
        }
    });
});

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll handler
const optimizedScrollHandler = debounce(() => {
    // Any heavy scroll operations can go here
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// ===================================
// INITIALIZE ON DOM LOAD
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Product Showcase Website Loaded Successfully!');
    
    // Get current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Initialize dynamic content from data file
    initializeDynamicContent();
    
    // Page-specific initialization
    if (currentPage === 'extensions.html') {
        // Render extensions with pagination
        renderExtensions(1);
    } else if (currentPage === 'opensource.html') {
        // Render open source with pagination
        renderOpenSource(1);
    } else if (currentPage === 'services.html') {
        // Render services
        renderServices();
    } else if (currentPage === 'about.html') {
        // Render about page content
        renderAboutPage();
    }
    
    // Initialize animations after content is rendered
    initializeAnimations();
    
    // Add loading animation completion
    document.body.classList.add('loaded');
});
