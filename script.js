document.addEventListener('DOMContentLoaded', () => {
    // --- تأثيرات Hover بسيطة باستخدام JavaScript (يمكن تحقيق معظمها بـ CSS) ---
    const hoverElements = document.querySelectorAll('.nav-link, .btn, .about-card, .gallery-item');

    hoverElements.forEach(element => {
        const originalStyle = element.style.cssText; // حفظ الأنماط الأصلية

        element.addEventListener('mouseenter', () => {
            element.style.transform = 'scale(1.05)';
            element.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
            element.style.transition = 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out';
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'scale(1)';
            element.style.boxShadow = 'var(--box-shadow)'; // استعادة ظل الصندوق الأصلي (إذا كان معرفًا في CSS)
            element.style.transition = 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out';
        });
    });

    // --- تأثير الظهور التدريجي للعناصر عند التمرير (باستخدام Intersection Observer API) ---
    const fadeUpElements = document.querySelectorAll('.menu-item, .gallery-item, .chef-card, .testimonial');

    const fadeUpObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeUpObserver.unobserve(entry.target); // لا تراقب العنصر بعد ظهوره
            }
        });
    }, {
        threshold: 0.1 // جزء من العنصر مرئي لبدء التأثير
    });

    fadeUpElements.forEach(element => {
        observer.observe(element); // استخدام نفس الـ observer الذي ربما تم تعريفه سابقًا
    });

    // --- مثال لتحريك شعار الموقع عند التحميل ---
    const logoElement = document.querySelector('.logo');
    if (logoElement) {
        logoElement.style.transform = 'translateY(-20px)';
        logoElement.style.opacity = '0';
        logoElement.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out 0.2s';

        setTimeout(() => {
            logoElement.style.transform = 'translateY(0)';
            logoElement.style.opacity = '1';
        }, 500); // تأخير بسيط لبدء التحريك بعد تحميل الصفحة
    }

    // --- مثال لتحريك زر "Scroll Down" بشكل متقطع ---
    const scrollDownArrow = document.querySelector('.scroll-down');
    if (scrollDownArrow) {
        function pulseArrow() {
            scrollDownArrow.animate([
                { transform: 'translateY(0)' },
                { transform: 'translateY(10px)' },
                { transform: 'translateY(0)' }
            ], {
                duration: 1500,
                easing: 'ease-in-out',
                iterations: Infinity
            });
        }
        pulseArrow();
    }

    // --- إضافة كلاس "loaded" إلى الـ body بعد تحميل كامل الصفحة لإظهار المحتوى ---
    document.body.classList.add('loaded');
});

// --- Intersection Observer API (تعريف الـ observer إذا لم يكن معرفًا من قبل) ---
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});