/* ===================================================
   LASER DENTAL CLINIC - Main JS
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ===== STICKY NAV =====
    const nav = document.getElementById('nav');
    let lastScroll = 0;

    const handleNavScroll = () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 400) {
            nav.classList.add('nav--visible');
        } else {
            nav.classList.remove('nav--visible');
        }
        lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleNavScroll, { passive: true });

    // ===== FLOATING CTA =====
    const floatingCta = document.getElementById('floatingCta');

    const handleFloatingCta = () => {
        if (window.scrollY > 600) {
            floatingCta.classList.add('floating-cta--visible');
        } else {
            floatingCta.classList.remove('floating-cta--visible');
        }
    };

    window.addEventListener('scroll', handleFloatingCta, { passive: true });

    // ===== SCROLL ANIMATIONS (Intersection Observer) =====
    const observerOptions = {
        threshold: 0,
        rootMargin: '50px 0px 0px 0px'
    };

    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                animateOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Animate process steps
    document.querySelectorAll('.process__step').forEach((step, index) => {
        step.style.transitionDelay = `${index * 0.15}s`;
        animateOnScroll.observe(step);
    });

    // Animate problem cards
    document.querySelectorAll('.problem__card').forEach((card, index) => {
        card.classList.add('fade-up');
        card.style.transitionDelay = `${index * 0.1}s`;
        animateOnScroll.observe(card);
    });

    // Animate video cards
    document.querySelectorAll('.video-card').forEach((card, index) => {
        card.classList.add('fade-up');
        card.style.transitionDelay = `${(index % 4) * 0.1}s`;
        animateOnScroll.observe(card);
    });

    // Animate review cards
    document.querySelectorAll('.reviews__card').forEach((card, index) => {
        card.classList.add('fade-up');
        card.style.transitionDelay = `${index * 0.1}s`;
        animateOnScroll.observe(card);
    });

    // Animate sections
    document.querySelectorAll('.section-header, .safearch__content, .safearch__video, .doctor__video, .doctor__content, .contact__info, .contact__form-wrapper, .pricing__inner, .videos__cta, .reviews__cta').forEach(el => {
        el.classList.add('fade-up');
        animateOnScroll.observe(el);
    });

    // ===== CONTACT FORM (Formspree) =====
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formSuccess = document.getElementById('formSuccess');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const btnText = submitBtn.querySelector('.btn__text');
            const btnLoading = submitBtn.querySelector('.btn__loading');

            // Show loading
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline';
            submitBtn.disabled = true;

            const formData = {
                name: form.querySelector('#name').value,
                phone: form.querySelector('#phone').value,
                message: form.querySelector('#message').value,
                _subject: 'Nowe zapytanie - strona bezzębie',
            };

            try {
                // Using Formspree - replace YOUR_FORM_ID with actual Formspree form ID
                const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    form.style.display = 'none';
                    formSuccess.style.display = 'block';
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                // Fallback: redirect to email
                const subject = encodeURIComponent('Nowe zapytanie - strona bezzębie');
                const body = encodeURIComponent(
                    `Imię: ${formData.name}\nTelefon: ${formData.phone}\nWiadomość: ${formData.message}`
                );
                window.location.href = `mailto:recepcja@ldclinic.pl?subject=${subject}&body=${body}`;
            } finally {
                btnText.style.display = 'inline';
                btnLoading.style.display = 'none';
                submitBtn.disabled = false;
            }
        });
    }

    // ===== PHONE INPUT FORMATTING =====
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.startsWith('48')) {
                value = value.substring(2);
            }
            if (value.length > 9) {
                value = value.substring(0, 9);
            }
            if (value.length >= 3 && value.length < 6) {
                value = value.substring(0, 3) + ' ' + value.substring(3);
            } else if (value.length >= 6) {
                value = value.substring(0, 3) + ' ' + value.substring(3, 6) + ' ' + value.substring(6);
            }
            e.target.value = value;
        });
    }

    // ===== SMOOTH SCROLL for anchor links =====
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const navHeight = nav.classList.contains('nav--visible') ? 70 : 0;
                const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

});
