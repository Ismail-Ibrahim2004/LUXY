// Portfolio Slider
const portfolioImages = [
    {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3',
        title: 'Modern Living Room',
        category: 'residential'
    },
    {
        url: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3',
        title: 'Luxury Kitchen',
        category: 'residential'
    },
    {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3',
        title: 'Contemporary Office',
        category: 'commercial'
    }
];

let currentSlide = 0;
const slider = document.querySelector('.portfolio-slider');

function createSlider() {
    portfolioImages.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        slide.style.backgroundImage = `url(${image.url})`;
        slide.style.backgroundSize = 'cover';
        slide.style.backgroundPosition = 'center';
        slide.style.height = '100%';
        slide.style.opacity = index === 0 ? '1' : '0';
        slide.style.transition = 'opacity 0.5s ease';
        slide.style.position = 'absolute';
        slide.style.width = '100%';
        slider.appendChild(slide);
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].style.opacity = '0';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.opacity = '1';
}

// Initialize slider
createSlider();
setInterval(nextSlide, 5000);

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const gallery = document.querySelector('.gallery');

const projects = [
    {
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3',
        title: 'Modern Living Room',
        category: 'residential'
    },
    {
        image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3',
        title: 'Luxury Kitchen',
        category: 'residential'
    },
    {
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3',
        title: 'Contemporary Office',
        category: 'commercial'
    },
    {
        image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3',
        title: 'Executive Suite',
        category: 'commercial'
    }
];

function createProjectGallery() {
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.dataset.category = project.category;
        
        projectItem.innerHTML = `
            <div class="project-image" style="background-image: url(${project.image})">
                <div class="project-overlay">
                    <h3>${project.title}</h3>
                    <p>${project.category}</p>
                </div>
            </div>
        `;
        
        gallery.appendChild(projectItem);
    });
}

function filterProjects(category) {
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterProjects(button.dataset.filter);
    });
});

// Initialize project gallery
createProjectGallery();

// Testimonials
const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'Homeowner',
        text: 'The attention to detail and level of professionalism exceeded our expectations. Our home has been transformed into a beautiful sanctuary.'
    },
    {
        name: 'Michael Chen',
        role: 'Business Owner',
        text: 'The team created a stunning office space that perfectly reflects our brand identity. The project was completed on time and within budget.'
    },
    {
        name: 'Emily Rodriguez',
        role: 'Interior Designer',
        text: 'Working with this team was a pleasure. Their innovative approach and commitment to quality are truly remarkable.'
    }
];

function createTestimonials() {
    const testimonialContainer = document.querySelector('.testimonial-container');
    
    testimonials.forEach(testimonial => {
        const testimonialItem = document.createElement('div');
        testimonialItem.className = 'testimonial-item';
        
        testimonialItem.innerHTML = `
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">
                <h4>${testimonial.name}</h4>
                <p>${testimonial.role}</p>
            </div>
        `;
        
        testimonialContainer.appendChild(testimonialItem);
    });
}

// Initialize testimonials
createTestimonials();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.querySelector('.consultation-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your interest! We will contact you soon.');
    this.reset();
}); 