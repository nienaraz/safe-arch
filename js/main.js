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
    document.querySelectorAll('.section-header, .doctor__content, .contact__info, .contact__form-wrapper, .pricing__inner, .reviews__cta').forEach(el => {
        el.classList.add('fade-up');
        animateOnScroll.observe(el);
    });

    // Animate section tags separately
    document.querySelectorAll('.section-tag').forEach(el => {
        animateOnScroll.observe(el);
    });

    // Animate doctor stats
    document.querySelectorAll('.doctor__stat').forEach((stat, i) => {
        stat.classList.add('fade-up');
        stat.style.transitionDelay = `${i * 0.15}s`;
        animateOnScroll.observe(stat);
    });

    // Animate pricing list items
    document.querySelectorAll('.pricing__list li').forEach((li, i) => {
        li.classList.add('slide-left');
        li.style.transitionDelay = `${i * 0.1}s`;
        animateOnScroll.observe(li);
    });

    // Animate FAQ items
    document.querySelectorAll('.faq__item').forEach((item, i) => {
        item.classList.add('fade-up');
        item.style.transitionDelay = `${i * 0.08}s`;
        animateOnScroll.observe(item);
    });

    // Animate doctor photo with scale
    document.querySelectorAll('.doctor__photo').forEach(el => {
        el.classList.add('scale-up');
        animateOnScroll.observe(el);
    });

    // ===== COUNTER ANIMATION =====
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;

                // Support data-count attribute (element starts at 0, animates to data-count value)
                const dataCount = el.getAttribute('data-count');
                if (dataCount) {
                    const target = parseInt(dataCount, 10);
                    if (!isNaN(target) && target > 0) {
                        animateCounter(el, target, target.toLocaleString('pl-PL').replace(/\s/g, ' '));
                    }
                    counterObserver.unobserve(el);
                    return;
                }

                // Fallback: parse from text content
                const text = el.textContent.trim();
                const match = text.match(/^([\d\s,.]+)/);
                if (match) {
                    const raw = match[1].replace(/\s/g, '').replace(',', '.');
                    const target = parseFloat(raw);
                    if (!isNaN(target) && target > 0) {
                        animateCounter(el, target, text);
                    }
                }
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    function animateCounter(el, target, fullText) {
        const suffix = fullText.replace(/^[\d\s,.]+/, '');
        const isDecimal = String(target).includes('.');
        const duration = 2000;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic for smooth deceleration
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = target * eased;

            if (isDecimal) {
                el.textContent = current.toFixed(1).replace('.', ',') + suffix;
            } else {
                const num = Math.round(current);
                el.textContent = num.toLocaleString('pl-PL').replace(/\s/g, ' ') + suffix;
            }

            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    }

    // Observe numbers for counter animation
    document.querySelectorAll('.hero__trust-number, .doctor__stat-number').forEach(el => {
        const dataCount = el.getAttribute('data-count');
        const text = el.textContent.trim();
        if (dataCount || /^\d/.test(text)) {
            counterObserver.observe(el);
        }
    });

    // ===== TILT EFFECT on pricing bar =====
    const pricingBar = document.querySelector('.pricing-bar__inner');
    if (pricingBar && window.matchMedia('(hover: hover)').matches) {
        pricingBar.addEventListener('mousemove', (e) => {
            const rect = pricingBar.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            pricingBar.style.transform = `perspective(800px) rotateX(${-y * 2}deg) rotateY(${x * 2}deg)`;
        });
        pricingBar.addEventListener('mouseleave', () => {
            pricingBar.style.transform = '';
        });
    }

    // ===== ANIMATE METAMORFOZY CARDS ON SCROLL =====
    document.querySelectorAll('.metamorfozy__card').forEach((card, index) => {
        card.classList.add('fade-up');
        card.style.transitionDelay = `${index * 0.08}s`;
        animateOnScroll.observe(card);
    });

    // ===== ANIMATE PRICING BAR =====
    const pricingBarSection = document.querySelector('.pricing-bar');
    if (pricingBarSection) {
        pricingBarSection.classList.add('fade-up');
        animateOnScroll.observe(pricingBarSection);
    }

    // ===== ANIMATE BIBLIA CARDS =====
    document.querySelectorAll('.biblia__card').forEach((card, index) => {
        card.classList.add('fade-up');
        card.style.transitionDelay = `${index * 0.08}s`;
        animateOnScroll.observe(card);
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
                const response = await fetch('https://formspree.io/f/mwvnyljy', {
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
