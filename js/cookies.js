/* ===================================================
   COOKIE CONSENT BANNER - Laser Dental Clinic
   RODO/GDPR compliant, blocks GA4 until consent
   =================================================== */

(function() {
    'use strict';

    var COOKIE_NAME = 'ldc_cookie_consent';
    var COOKIE_DAYS = 365;

    function getCookie(name) {
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    }

    function setCookie(name, value, days) {
        var d = new Date();
        d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = name + '=' + value + ';expires=' + d.toUTCString() + ';path=/;SameSite=Lax';
    }

    function enableGA() {
        // GA4 is already loaded but we need to signal consent
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
        }
    }

    function disableGA() {
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'analytics_storage': 'denied'
            });
        }
        // Delete GA cookies
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var c = cookies[i].trim();
            if (c.indexOf('_ga') === 0 || c.indexOf('_gid') === 0) {
                var name = c.split('=')[0];
                document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;';
                document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;domain=.' + location.hostname;
            }
        }
    }

    function showBanner() {
        var banner = document.createElement('div');
        banner.id = 'cookieBanner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-label', 'Zgoda na pliki cookies');
        banner.innerHTML =
            '<div class="cookie-banner__inner">' +
                '<div class="cookie-banner__text">' +
                    '<p><strong>Ta strona korzysta z plik\u00f3w cookies</strong></p>' +
                    '<p>Wykorzystujemy cookies analityczne (Google Analytics), aby lepiej rozumie\u0107 jak korzystasz ze strony. ' +
                    '<a href="/polityka-prywatnosci.html">Polityka prywatno\u015bci</a></p>' +
                '</div>' +
                '<div class="cookie-banner__buttons">' +
                    '<button id="cookieAccept" class="cookie-btn cookie-btn--accept">Akceptuj wszystkie</button>' +
                    '<button id="cookieReject" class="cookie-btn cookie-btn--reject">Tylko niezb\u0119dne</button>' +
                '</div>' +
            '</div>';
        document.body.appendChild(banner);

        document.getElementById('cookieAccept').addEventListener('click', function() {
            setCookie(COOKIE_NAME, 'all', COOKIE_DAYS);
            enableGA();
            closeBanner();
        });

        document.getElementById('cookieReject').addEventListener('click', function() {
            setCookie(COOKIE_NAME, 'essential', COOKIE_DAYS);
            disableGA();
            closeBanner();
        });
    }

    function closeBanner() {
        var banner = document.getElementById('cookieBanner');
        if (banner) {
            banner.classList.add('cookie-banner--hidden');
            setTimeout(function() { banner.remove(); }, 400);
        }
    }

    // Set default consent to denied before GA loads
    if (typeof gtag === 'function') {
        gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied'
        });
    }

    // Check existing consent
    var consent = getCookie(COOKIE_NAME);
    if (consent === 'all') {
        enableGA();
    } else if (consent === 'essential') {
        disableGA();
    } else {
        // No consent yet - show banner
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', showBanner);
        } else {
            showBanner();
        }
    }
})();
