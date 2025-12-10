
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