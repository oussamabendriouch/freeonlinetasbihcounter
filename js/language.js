class LanguageManager {
    constructor() {
        this.currentLang = 'en';
        this.langBtn = document.getElementById('langBtn');
        this.langDropdown = document.getElementById('langDropdown');
        this.currentLangSpan = document.getElementById('currentLang');
        
        this.detectLanguage();
        this.bindEvents();
        this.updateLanguage();
    }
    
    detectLanguage() {
        // Get language from URL
        const path = window.location.pathname;
        if (path.startsWith('/ar')) {
            this.currentLang = 'ar';
        } else if (path.startsWith('/id')) {
            this.currentLang = 'id';
        } else {
            this.currentLang = 'en';
        }
        
        // Fallback to saved language
        const savedLang = localStorage.getItem('tasbihLanguage');
        if (savedLang && !path.match(/^\/(ar|id|en)/)) {
            this.currentLang = savedLang;
        }
    }
    
    bindEvents() {
        this.langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleDropdown();
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            this.closeDropdown();
        });
        
        // Handle language selection
        this.langDropdown.addEventListener('click', (e) => {
    const option = e.target.closest('.lang-option');
    if (!option) return; // تم النقر على شيء غير صالح

    e.preventDefault();
    const lang = option.getAttribute('data-lang');

    if (lang && ['en', 'ar', 'id'].includes(lang)) {
        this.changeLanguage(lang);
    }
});

    }
    
    toggleDropdown() {
        this.langBtn.parentElement.classList.toggle('active');
    }
    
    closeDropdown() {
        this.langBtn.parentElement.classList.remove('active');
    }
    
   changeLanguage(lang) {
    const currentPath = window.location.pathname;
    const newPath = `/${lang}/`;

    // حتى لو كنا بالفعل في نفس الصفحة، نعيد التوجيه
    if (currentPath !== newPath) {
        window.location.href = newPath;
    } else {
        window.location.reload(); // إعادة تحميل الصفحة نفسها
    }
}


        
        // Update page language and direction
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        // Update counter language
        if (window.tasbihCounter) {
            window.tasbihCounter.updateLanguage(lang);
        }
    }
    
    updateLanguage() {
        if (!window.translations || !window.translations[this.currentLang]) {
            return;
        }
        
        const translations = window.translations[this.currentLang];
        
        // Update all elements with data-key attributes
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[key]) {
                if (element.tagName === 'INPUT' && element.type === 'submit') {
                    element.value = translations[key];
                } else if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                    element.placeholder = translations[key];
                } else {
                    element.textContent = translations[key];
                }
            }
        });
        
        // Update page title and meta description
        this.updateSEO();
        
        // Update current language display
        const langMap = {
            'en': 'EN',
            'ar': 'العربية',
            'id': 'ID'
        };
        this.currentLangSpan.textContent = langMap[this.currentLang] || 'EN';
        
        // Update document direction
        document.documentElement.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = this.currentLang;
    }
    
    updateSEO() {
        const seoData = {
            en: {
                title: "Free Tasbih Counter Online – Dhikr & Zikr Tally",
                description: "Free online Tasbih & tally counter for Dhikr and Zikr. Select your Dhikr and start counting. Auto-save, mobile-friendly, no download needed."
            },
            ar: {
                title: "عداد تسبيح مجاني أون لاين – للذكر والاستغفار",
                description: "عداد تسبيح وعدّ أذكار مجاني عبر الإنترنت. اختر الذكر الذي تريده وابدأ العد فورًا. يحفظ تلقائيًا، متوافق مع الجوال، بدون تحميل."
            },
            id: {
                title: "Penghitung Tasbih Online Gratis – Dzikir & Zikir",
                description: "Penghitung tasbih & tally online gratis untuk dzikir. Pilih dzikir Anda dan mulai menghitung. Simpan otomatis, ramah seluler, tanpa unduhan."
            }
        };
        
        const currentSEO = seoData[this.currentLang] || seoData.en;
        
        // Update title
        document.title = currentSEO.title;
        
        // Update meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = currentSEO.description;
        }
        
        // Update Open Graph tags
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.content = currentSEO.title;
        }
        
        let ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.content = currentSEO.description;
        }
    }
    
    saveLanguage() {
        localStorage.setItem('tasbihLanguage', this.currentLang);
    }
    
    getCurrentLanguage() {
        return this.currentLang;
    }
    
    loadAdhkar(type) {
        if (!window.adhkarData || !window.adhkarData[type] || !window.adhkarData[type][this.currentLang]) {
            return [];
        }
        
        return window.adhkarData[type][this.currentLang];
    }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
});
