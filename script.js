/* ============================================================
   SmartEnglish — Main Script
   ============================================================ */

/* ==================== CONFIGURATION ==================== */

const PHONE_SCREENSHOTS = [
    'img/home.png',
    'img/home1.png',
    'img/parcours.png',
    'img/parcours2.png'
];

const GALLERY_SCREENSHOTS = [
    { url: 'img/parcours.png',   caption: 'Écran du parcours' },
    { url: 'img/leçon4.png',     caption: 'Exercice de réordonnancement' },
    { url: 'img/citation.png',   caption: 'Citation du jour' },
    { url: 'img/endLesson.png',  caption: 'Fin de leçon' },
    { url: 'img/profile2.png',   caption: 'Profil utilisateur' },
    { url: 'img/ligue.png',      caption: 'Ligues hebdomadaires' },
    { url: 'img/setting.png',    caption: 'Paramètres' },
    { url: 'img/traduction.png', caption: 'Traduction FR ↔ EN' },
    { url: 'img/wordGame.png',   caption: 'Jeux de vocabulaire' }
];

const FEATURES = [
    {
        icon: 'wifi-off',
        title: '100% Gratuit · 90% Hors Connexion',
        desc: 'Toutes les leçons sont gratuites. Une fois chargées, 90% des fonctionnalités sont disponibles sans internet.'
    },
    {
        icon: 'layers',
        title: 'Progression par Étapes',
        desc: 'Débloque chaque niveau avec des exercices variés : QCM, réordonnancement, saisie de mots et prononciation.'
    },
    {
        icon: 'quote',
        title: 'Citations Quotidiennes',
        desc: '3 citations par jour avec traduction. Ajoute tes préférées aux favoris et partage-les facilement.'
    },
    {
        icon: 'map-pin',
        title: 'Contexte Africain',
        desc: 'Histoires et dialogues ancrés dans les réalités africaines et camerounaises pour un apprentissage ancré.'
    },
    {
        icon: 'gamepad-2',
        title: 'Jeux de Vocabulaire',
        desc: 'Mini-jeux ludiques pour enrichir ton vocabulaire et renforcer ta mémorisation de façon engageante.'
    },
    {
        icon: 'languages',
        title: 'Traduction FR ↔ EN · Ligues',
        desc: 'Traduction intégrée et ligues hebdomadaires contre des bots pour maintenir ta motivation au quotidien.'
    }
];

/* Level-based styling for Pathway cards */
const LEVEL_CONFIG = {
    'A1': { border: '#2563EB', badge: '#2563EB' },
    'A2': { border: '#059669', badge: '#059669' },
    'B1': { border: '#D97706', badge: '#D97706' },
    'B2': { border: '#7C3AED', badge: '#7C3AED' },
    'C1': { border: '#DC2626', badge: '#DC2626' }
};

const PATHWAY_BLOCKS = [
    { title: 'Premier Contact',      level: 'A1', lessons: 15 },
    { title: 'Temps et Quotidien',   level: 'A1', lessons: 15 },
    { title: 'Décrire le Monde',     level: 'A2', lessons: 15 },
    { title: 'Maison et Voisinage',  level: 'A2', lessons: 15 },
    { title: 'Vie Sociale',          level: 'B1', lessons: 15 },
    { title: 'Travail et Études',    level: 'B1', lessons: 15 },
    { title: 'Voyages',              level: 'B1', lessons: 15 },
    { title: 'Culture et Médias',    level: 'B2', lessons: 15 },
    { title: 'Affaires',             level: 'B2', lessons: 15 },
    { title: 'Expression Avancée',   level: 'C1', lessons: 15 }
];

/* English vocabulary words for background bubbles */
const BUBBLE_WORDS = [
    'Hello', 'Learn', 'Speak', 'Travel', 'Family', 'Dream', 'Love',
    'Friend', 'School', 'Music', 'Future', 'Success', 'Culture', 'Story',
    'Practice', 'Fluent', 'Achieve', 'Grammar', 'Listen', 'Sentence',
    'Dialogue', 'Write', 'Read', 'Confidence', 'Improve', 'Discover',
    'Progress', 'Excel', 'Explore', 'Inspire', 'Believe', 'Create',
    'Grow', 'Smart', 'English', 'Global', 'Challenge', 'Knowledge',
    'Wonder', 'Bright', 'Courage', 'Freedom', 'Journey', 'Master'
];

const BUBBLE_COLORS = [
    { bg: 'rgba(37,99,235,0.07)',   text: 'rgba(37,99,235,0.38)',   border: 'rgba(37,99,235,0.12)' },
    { bg: 'rgba(124,58,237,0.06)',  text: 'rgba(124,58,237,0.36)',  border: 'rgba(124,58,237,0.10)' },
    { bg: 'rgba(245,158,11,0.06)',  text: 'rgba(180,100,0,0.34)',   border: 'rgba(245,158,11,0.12)' },
    { bg: 'rgba(5,150,105,0.06)',   text: 'rgba(5,150,105,0.36)',   border: 'rgba(5,150,105,0.10)' }
];

/* ==================== INIT ==================== */
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initWordBubbles();
    initFeatures();
    initPathway();
    initPhoneSlider();
    initGallery();
    initNavScroll();
    initBackToTop();
    initFAQ();
    initFadeInUp();
    initCounterAnimation();
});

/* ==================== WORD BUBBLES ==================== */
function initWordBubbles() {
    const container = document.getElementById('bubbles-bg');
    if (!container) return;

    /**
     * Spawn a single bubble at a random horizontal position,
     * starting just below the viewport and floating to the top.
     */
    function spawnBubble() {
        const word     = BUBBLE_WORDS[Math.floor(Math.random() * BUBBLE_WORDS.length)];
        const color    = BUBBLE_COLORS[Math.floor(Math.random() * BUBBLE_COLORS.length)];
        const size     = Math.random() * 72 + 48;           // 48 – 120px
        const duration = Math.random() * 14 + 16;           // 16 – 30s
        const leftPct  = Math.random() * 92;                // 0 – 92%

        const el = document.createElement('div');
        el.className = 'bubble';
        el.textContent = word;
        el.setAttribute('aria-hidden', 'true');

        Object.assign(el.style, {
            width:        `${size}px`,
            height:       `${size}px`,
            left:         `${leftPct}%`,
            bottom:       '-130px',
            background:   color.bg,
            color:        color.text,
            border:       `1px solid ${color.border}`,
            fontSize:     `${Math.max(9, size * 0.17)}px`,
            animationDuration: `${duration}s`
        });

        container.appendChild(el);

        el.addEventListener('animationend', () => el.remove(), { once: true });
    }

    /* Initial staggered burst */
    for (let i = 0; i < 10; i++) {
        setTimeout(spawnBubble, i * 600);
    }

    /* Keep spawning every ~2.2 s */
    setInterval(spawnBubble, 2200);

    /* Pause when tab is hidden (performance) */
    document.addEventListener('visibilitychange', () => {
        container.style.animationPlayState = document.hidden ? 'paused' : 'running';
    });
}

/* ==================== FEATURES GRID ==================== */
function initFeatures() {
    const grid = document.getElementById('features-grid');
    if (!grid) return;

    FEATURES.forEach((feature, i) => {
        const card = document.createElement('article');
        card.className = 'card feature-card fade-in-up';
        card.style.transitionDelay = `${i * 80}ms`;
        card.innerHTML = `
            <div class="feature-card__icon-circle">
                <i data-lucide="${feature.icon}"></i>
            </div>
            <h3 class="feature-card__title">${feature.title}</h3>
            <p class="feature-card__description">${feature.desc}</p>
        `;
        grid.appendChild(card);
    });

    lucide.createIcons();
}

/* ==================== PATHWAY SLIDER ==================== */
function initPathway() {
    const slider = document.getElementById('pathway-slider');
    if (!slider) return;

    PATHWAY_BLOCKS.forEach((block, i) => {
        const cfg  = LEVEL_CONFIG[block.level] || { border: '#2563EB', badge: '#2563EB' };
        const card = document.createElement('div');
        card.className = 'card pathway__card fade-in-up';
        card.style.transitionDelay = `${i * 60}ms`;
        card.style.borderLeftColor = cfg.border;

        card.innerHTML = `
            <span class="pathway__badge" style="background:${cfg.badge}">${block.level}</span>
            <h3 class="pathway__block-title">${block.title}</h3>
            <div class="pathway__lessons">
                <i data-lucide="book-open"></i>
                <span>${block.lessons} leçons</span>
            </div>
        `;
        slider.appendChild(card);
    });

    lucide.createIcons();
}

/* ==================== PHONE SLIDER ==================== */
function initPhoneSlider() {
    const screenshot   = document.getElementById('phone-screenshot');
    const dotsContainer = document.getElementById('phone-dots');
    if (!screenshot || !dotsContainer) return;

    let currentIndex = 0;
    let intervalId;

    PHONE_SCREENSHOTS.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'phone-mockup__dot';
        dot.setAttribute('aria-label', `Capture ${i + 1}`);
        dot.addEventListener('click', () => { goToSlide(i); resetAutoPlay(); });
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.phone-mockup__dot');

    function goToSlide(index) {
        screenshot.style.opacity = '0';
        setTimeout(() => {
            screenshot.src = PHONE_SCREENSHOTS[index];
            screenshot.style.opacity = '1';
            dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
            currentIndex = index;
        }, 380);
    }

    const nextSlide = () => goToSlide((currentIndex + 1) % PHONE_SCREENSHOTS.length);
    const prevSlide = () => goToSlide((currentIndex - 1 + PHONE_SCREENSHOTS.length) % PHONE_SCREENSHOTS.length);

    document.getElementById('phone-prev')?.addEventListener('click', () => { prevSlide(); resetAutoPlay(); });
    document.getElementById('phone-next')?.addEventListener('click', () => { nextSlide(); resetAutoPlay(); });

    function startAutoPlay() {
        stopAutoPlay();
        intervalId = setInterval(() => requestAnimationFrame(nextSlide), 3200);
    }

    function stopAutoPlay()  { if (intervalId) clearInterval(intervalId); }
    function resetAutoPlay() { stopAutoPlay(); startAutoPlay(); }

    document.addEventListener('visibilitychange', () => {
        document.hidden ? stopAutoPlay() : startAutoPlay();
    });

    goToSlide(0);
    startAutoPlay();
}

/* ==================== GALLERY ==================== */
function initGallery() {
    const slider       = document.getElementById('gallery-slider');
    const dotsContainer = document.getElementById('gallery-dots');
    if (!slider || !dotsContainer) return;

    let currentIndex = 0;

    GALLERY_SCREENSHOTS.forEach((shot, i) => {
        const slide = document.createElement('div');
        slide.className = 'gallery__slide';
        slide.innerHTML = `
            <figure>
                <div class="gallery__phone-frame">
                    <img src="${shot.url}" alt="${shot.caption}" class="gallery__image" loading="lazy">
                </div>
                <figcaption class="gallery__caption">${shot.caption}</figcaption>
            </figure>
        `;
        slider.appendChild(slide);

        const dot = document.createElement('button');
        dot.className = 'gallery__dot';
        dot.setAttribute('aria-label', `Capture ${i + 1}`);
        dot.addEventListener('click', () => scrollToSlide(i));
        dotsContainer.appendChild(dot);
    });

    const slides = slider.querySelectorAll('.gallery__slide');
    const dots   = dotsContainer.querySelectorAll('.gallery__dot');

    function scrollToSlide(index) {
        const slide     = slides[index];
        const scrollPos = slide.offsetLeft - slider.offsetWidth / 2 + slide.offsetWidth / 2;
        slider.scrollTo({ left: scrollPos, behavior: 'smooth' });
        updateActive(index);
    }

    function updateActive(index) {
        currentIndex = index;
        slides.forEach((slide, i) => {
            slide.classList.toggle('active',   i === index);
            slide.classList.toggle('adjacent', Math.abs(i - index) === 1);
        });
        dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    }

    slider.addEventListener('scroll', () => {
        const center = slider.scrollLeft + slider.offsetWidth / 2;
        let closest = 0, closestDist = Infinity;
        slides.forEach((slide, i) => {
            const dist = Math.abs(center - (slide.offsetLeft + slide.offsetWidth / 2));
            if (dist < closestDist) { closestDist = dist; closest = i; }
        });
        updateActive(closest);
    }, { passive: true });

    document.getElementById('gallery-prev')?.addEventListener('click', () => scrollToSlide(Math.max(0, currentIndex - 1)));
    document.getElementById('gallery-next')?.addEventListener('click', () => scrollToSlide(Math.min(GALLERY_SCREENSHOTS.length - 1, currentIndex + 1)));

    updateActive(0);
}

/* ==================== NAVIGATION SCROLL ==================== */
function initNavScroll() {
    const nav = document.getElementById('nav');
    if (!nav) return;
    window.addEventListener('scroll', () => {
        nav.classList.toggle('nav--scrolled', window.scrollY > 50);
    }, { passive: true });
}

/* ==================== BACK TO TOP ==================== */
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ==================== FAQ ACCORDION ==================== */
function initFAQ() {
    const items = document.querySelectorAll('.faq__item');
    items.forEach(item => {
        item.addEventListener('toggle', () => {
            if (item.open) {
                items.forEach(other => { if (other !== item) other.open = false; });
            }
        });
    });
}

/* ==================== FADE-IN-UP ==================== */
function initFadeInUp() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
}

/* ==================== COUNTER ANIMATION ==================== */
function initCounterAnimation() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el     = entry.target;
            const target = parseInt(el.getAttribute('data-count'), 10);
            const suffix = el.getAttribute('data-suffix') || '';
            const prefix = el.getAttribute('data-prefix') || '';
            let start    = 0;
            const step   = Math.ceil(target / 50);
            const tick   = () => {
                start = Math.min(start + step, target);
                el.textContent = prefix + start + suffix;
                if (start < target) requestAnimationFrame(tick);
            };
            tick();
            observer.unobserve(el);
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}
