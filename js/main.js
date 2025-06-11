// Initialize AOS Animation Library
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Initialize Swiper
const productSlider = new Swiper('.product-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Color Change on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Form Submission Handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => data[key] = value);
        
        // Show success message (you can customize this part)
        alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
        this.reset();
    });
}

// Add Animation to Product Cards on Hover
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Order Button Click Handler
const orderButtons = document.querySelectorAll('.product-card .btn-primary');
orderButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.closest('.product-card').querySelector('h3').textContent;
        const productPrice = this.closest('.product-card').querySelector('.price').textContent;
        
        // You can customize this part to handle orders
        alert(`Đặt hàng thành công!\nSản phẩm: ${productName}\nGiá: ${productPrice}\n\nChúng tôi sẽ liên hệ với bạn để xác nhận đơn hàng.`);
    });
});

// Add Loading Animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Lazy Loading for Images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    const imageOptions = {
        threshold: 0,
        rootMargin: '0px 0px 50px 0px'
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('fade-in');
                observer.unobserve(img);
            }
        });
    }, imageOptions);

    images.forEach(img => imageObserver.observe(img));
}); 