
// Λεία κύλιση για τα links του menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Αρχικοποίηση
    updateCarousel();
    
    // Επόμενη εικόνα
    nextBtn.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    });
    
    // Προηγούμενη εικόνα
    prevBtn.addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });
    
    // Κουκκίδες (dots)
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            currentSlide = parseInt(this.getAttribute('data-slide'));
            updateCarousel();
        });
    });
    
    // Αυτόματη κύλιση (προαιρετικό)
    let autoSlide = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }, 5000);
    
    // Σταματάει την αυτόματη κύλιση όταν ο χρήστης αλληλεπιδρά
    carouselContainer.addEventListener('mouseenter', () => clearInterval(autoSlide));
    carouselContainer.addEventListener('mouseleave', () => {
        autoSlide = setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }, 5000);
    });
    
    // Ενημέρωση carousel
    function updateCarousel() {
        // Μετακίνηση slides
        carouselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Ενημέρωση dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
        
        // Ενημέρωση slides
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
    }
    
    // Προσθήκη support για touch σε κινητά
    let startX = 0;
    let endX = 0;
    
    carouselContainer.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
    });
    
    carouselContainer.addEventListener('touchend', e => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const threshold = 50;
        
        if (startX - endX > threshold) {
            // Swipe left - next
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }
        
        if (endX - startX > threshold) {
            // Swipe right - previous
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }
    }
});

// Χειρισμός της Φόρμας
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Αποτρέπει την default ανανέωση της σελίδας

    // Συσκευή των δεδομένων
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    // ΣΤΗΝ ΠΡΑΓΜΑΤΙΚΟΤΗΤΑ: Εδώ θα χρησιμοποιούσες ένα service όπως το EmailJS, Formspree ή θα έστελνες τα δεδομένα σε ένα server.
    // Αυτό είναι ένα απλό παράδειγμα που απλά εμφανίζει τα δεδομένα στην κονσόλα και εμφανίζει ένα μήνυμα.

    console.log("Τα στοιχεία του αιτήματος:", formData);

    // Προσομοίωση αποστολής (Αντικατέστησε αυτό το μέρος με πραγματικό API call)
    alert(`Ευχαριστούμε πολύ, ${formData.name}! Το αίτημά σας ελήφθη και θα επικοινωνήσουμε μαζί σας σύντομα στο ${formData.email} ή στο ${formData.phone}.`);

    // Εκκαθάριση της φόρμας
    this.reset();
});