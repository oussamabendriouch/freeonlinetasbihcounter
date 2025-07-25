class ThemeManager {
    constructor() {
        this.theme = 'light';
        this.themeToggle = document.getElementById('themeToggle');
        
        this.loadSavedTheme();
        this.bindEvents();
        this.updateIcons();
    }
    
    loadSavedTheme() {
        const savedTheme = localStorage.getItem('tasbihTheme');
        if (savedTheme) {
            this.theme = savedTheme;
        } else {
            // Check system preference
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                this.theme = 'dark';
            }
        }
        
        this.applyTheme();
    }
    
    bindEvents() {
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
        
        // Listen for system theme changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (!localStorage.getItem('tasbihTheme')) {
                    this.theme = e.matches ? 'dark' : 'light';
                    this.applyTheme();
                    this.updateIcons();
                }
            });
        }
    }
    
    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme();
        this.updateIcons();
        this.saveTheme();
        
        // Add transition effect
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }
    
    applyTheme() {
        document.body.className = `${this.theme}-mode`;
        
        // Update meta theme-color
        let themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (!themeColorMeta) {
            themeColorMeta = document.createElement('meta');
            themeColorMeta.name = 'theme-color';
            document.head.appendChild(themeColorMeta);
        }
        
        themeColorMeta.content = this.theme === 'dark' ? '#1a202c' : '#ffffff';
    }
    
    updateIcons() {
        // Icons are updated via CSS transitions
        // This method can be extended for additional icon updates
    }
    
    saveTheme() {
        localStorage.setItem('tasbihTheme', this.theme);
    }
    
    getCurrentTheme() {
        return this.theme;
    }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new ThemeManager();
});