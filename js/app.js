// Main application initialization and utility functions
class TasbihApp {
    constructor() {
        this.initializeApp();
        this.initializeLucideIcons();
        this.initializeAdhkarSections();
        this.bindGlobalEvents();
    }
    
    initializeApp() {
        // Initialize components (order matters)
        // LanguageManager is initialized first to set up translations
        // ThemeManager is initialized second to apply theme
        // TasbihCounter is initialized last to use language and theme settings
        
        console.log('🕌 Tasbih Counter App initialized');
        
        // Add loading class and remove after initialization
        document.body.classList.add('loading');
        
        setTimeout(() => {
            document.body.classList.remove('loading');
            document.body.classList.add('loaded');
        }, 100);
    }
    
    initializeLucideIcons() {
        // Initialize Lucide icons after DOM is ready
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
    
    initializeAdhkarSections() {
        // Load adhkar data for both morning and evening sections
        this.loadAdhkarSection('morning');
        this.loadAdhkarSection('evening');
    }
    
    loadAdhkarSection(type) {
        const contentElement = document.getElementById(`${type}Adhkar`);
        if (!contentElement) return;
        
        // Get current language
        const currentLang = window.languageManager ? window.languageManager.getCurrentLanguage() : 'en';
        
        // Load adhkar data
        const adhkarList = window.languageManager ? 
            window.languageManager.loadAdhkar(type) : 
            (window.adhkarData && window.adhkarData[type] && window.adhkarData[type][currentLang]) || [];
        
        if (adhkarList.length === 0) {
            contentElement.innerHTML = '<div class="adhkar-loading">No adhkar available</div>';
            return;
        }
        
        // Generate HTML for adhkar items
        const adhkarHTML = adhkarList.map(item => `
            <div class="adhkar-item fade-in">
                <div class="adhkar-arabic">${item.arabic}</div>
                <div class="adhkar-translation">${item.translation}</div>
                <div class="adhkar-count">${item.count}</div>
            </div>
        `).join('');
        
        contentElement.innerHTML = adhkarHTML;
    }
    
    bindGlobalEvents() {
        // Handle adhkar section toggles
   window.toggleAdhkar = (type) => {
    const card = document.querySelector(`#${type}Adhkar`).closest('.adhkar-card');
    const content = document.querySelector(`#${type}Adhkar`);
    
    card.classList.toggle('active');
    content.classList.toggle('hidden');

    if (!content.classList.contains('hidden')) {
        tasbihApp.loadAdhkarSection(type);
    }
};

        
        // Handle smooth scrolling for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Handle service worker registration for offline functionality
        this.registerServiceWorker();
        
        // Handle installation prompt for PWA
        this.handleInstallPrompt();
        
        // Analytics placeholder
        this.initializeAnalytics();
    }
    
    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then((registration) => {
                        console.log('SW registered: ', registration);
                    })
                    .catch((registrationError) => {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }
    }
    
    handleInstallPrompt() {
        let deferredPrompt;
        
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            
            // Show install button if desired
            // This can be customized based on requirements
        });
        
        window.addEventListener('appinstalled', (evt) => {
            console.log('App was installed');
        });
    }
    
    initializeAnalytics() {
        // Google Analytics placeholder
        // Replace with actual tracking code when ready
        /*
        window.gtag = window.gtag || function(){
            (gtag.q = gtag.q || []).push(arguments);
        };
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID');
        */
    }
    
    // Utility functions
    formatNumber(num) {
        return new Intl.NumberFormat().format(num);
    }
    
    formatTime(timestamp) {
        return new Intl.DateTimeFormat([], {
            hour: '2-digit',
            minute: '2-digit'
        }).format(new Date(timestamp));
    }
    
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Performance monitoring
    measurePerformance() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart);
                }, 0);
            });
        }
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.tasbihApp = new TasbihApp();
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden, save current state
        if (window.tasbihCounter) {
            window.tasbihCounter.saveData();
        }
    } else {
        // Page is visible again, refresh icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
});

// Handle online/offline status
window.addEventListener('online', () => {
    console.log('App is online');
    document.body.classList.remove('offline');
});

window.addEventListener('offline', () => {
    console.log('App is offline');
    document.body.classList.add('offline');
});

// Export for external access
window.TasbihApp = TasbihApp;
