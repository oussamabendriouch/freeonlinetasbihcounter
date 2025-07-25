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
        const path = window.location.pathname;
        if (path.startsWith('/ar')) {
            this.currentLang = 'ar';
        } else if (path.startsWith('/id')) {
            this.currentLang = 'id';
        } else {
            this.currentLang = 'en';
        }

        // إذا لم يكن في المسار لغة، استخدم اللغة المحفوظة
        const savedLang = localStorage.getItem('tasbihLanguage');
        if (savedLang && !path.match(/^\/(ar|id|en)/)) {
            this.currentLang = savedLang;
        }
    }

    bindEvents() {
        // زر اللغة
        this.langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleDropdown();
        });

        // إغلاق القائمة عند النقر خارجها
        document.addEventListener('click', () => {
            this.closeDropdown();
        });

        // اختيار اللغة
        const langOptions = this.langDropdown.querySelectorAll('.lang-option');
        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = option.getAttribute('data-lang');
                this.changeLanguage(lang);
            });
        });
    }

    toggleDropdown() {
        if (this.langDropdown.classList.contains('hidden')) {
            this.langDropdown.classList.remove('hidden');
        } else {
            this.langDropdown.classList.add('hidden');
        }
    }

    closeDropdown() {
        this.langDropdown.classList.add('hidden');
    }

    changeLanguage(lang) {
        this.currentLang = lang;
        this.saveLanguage();
        this.closeDropdown();

        // ✅ توجيه حقيقي إلى مجلد اللغة
        window.location.href = `/${lang}/`;
    }

    updateLanguage() {
        if (!window.translations || !window.translations[this.currentLang]) return;

        const translations = window.translations[this.currentLang];

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

        this.updateSEO();

        const langMap = {
            'en': 'EN',
            'ar': 'العربية',
            'id': 'ID'
        };
        if (this.currentLangSpan) {
            this.currentLangSpan.textContent = langMap[this.currentLang] || 'EN';
        }

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

        document.title = currentSEO.title;

        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = currentSEO.description;
        }

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

// ⏳ عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
});
