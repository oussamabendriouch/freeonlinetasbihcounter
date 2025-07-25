class TasbihCounter {
    constructor() {
        this.count = 0;
        this.currentDhikr = 'subhanallah';
        this.history = [];
        this.motivationalMessages = [];
        this.currentLang = 'en';
        
        this.initializeElements();
        this.loadSavedData();
        this.bindEvents();
        this.loadMotivationalMessages();
    }
    
    initializeElements() {
        this.counterNumber = document.getElementById('counterNumber');
        this.counterDhikr = document.getElementById('counterDhikr');
        this.dhikrSelect = document.getElementById('dhikrSelect');
        this.countBtn = document.getElementById('countBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.motivationMessage = document.getElementById('motivationMessage');
        this.historyList = document.getElementById('historyList');
        this.clearHistoryBtn = document.getElementById('clearHistoryBtn');
    }
    
    loadSavedData() {
        const savedData = localStorage.getItem('tasbihData');
        if (savedData) {
            const data = JSON.parse(savedData);
            this.count = data.count || 0;
            this.currentDhikr = data.currentDhikr || 'subhanallah';
            this.history = data.history || [];
            
            this.updateDisplay();
            this.updateHistory();
            this.dhikrSelect.value = this.currentDhikr;
        }
    }
    
    saveData() {
        const data = {
            count: this.count,
            currentDhikr: this.currentDhikr,
            history: this.history
        };
        localStorage.setItem('tasbihData', JSON.stringify(data));
    }
    
    loadMotivationalMessages() {
        if (window.translations && window.translations[this.currentLang]) {
            this.motivationalMessages = window.translations[this.currentLang].motivational_messages || [
                "Well done! 😊",
                "Keep going! 🌟",
                "Excellent! 👏"
            ];
        }
    }
    
    bindEvents() {
        this.countBtn.addEventListener('click', () => this.increment());
        this.resetBtn.addEventListener('click', () => this.reset());
        this.dhikrSelect.addEventListener('change', (e) => this.changeDhikr(e.target.value));
        this.clearHistoryBtn.addEventListener('click', () => this.clearHistory());
        
        // Allow clicking on counter number to increment
        this.counterNumber.addEventListener('click', () => this.increment());
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space' && !e.target.matches('input, select, textarea')) {
                e.preventDefault();
                this.increment();
            } else if (e.code === 'KeyR' && e.ctrlKey) {
                e.preventDefault();
                this.reset();
            }
        });
    }
    
    increment() {
        this.count++;
        this.updateDisplay();
        this.showMotivationalMessage();
        this.addToHistory();
        this.saveData();
        
        // Add animation
        this.counterNumber.classList.add('bounce');
        setTimeout(() => {
            this.counterNumber.classList.remove('bounce');
        }, 600);
    }
    
    reset() {
        if (this.count > 0) {
            const dhikrText = this.getDhikrText();
            this.addToHistory(`Reset ${dhikrText} - ${this.count} times`);
        }
        
        this.count = 0;
        this.updateDisplay();
        this.hideMotivationalMessage();
        this.saveData();
        
        // Add animation
        this.counterNumber.classList.add('fade-in');
        setTimeout(() => {
            this.counterNumber.classList.remove('fade-in');
        }, 500);
    }
    
    changeDhikr(newDhikr) {
        if (this.count > 0) {
            const oldDhikrText = this.getDhikrText();
            this.addToHistory(`Completed ${oldDhikrText} - ${this.count} times`);
        }
        
        this.currentDhikr = newDhikr;
        this.count = 0;
        this.updateDisplay();
        this.hideMotivationalMessage();
        this.saveData();
    }
    
    getDhikrText() {
        if (window.translations && window.translations[this.currentLang]) {
            return window.translations[this.currentLang][this.currentDhikr] || this.currentDhikr;
        }
        return this.currentDhikr;
    }
    
    updateDisplay() {
        this.counterNumber.textContent = this.count;
        this.counterDhikr.textContent = this.getDhikrText();
        this.counterDhikr.setAttribute('data-key', this.currentDhikr);
    }
    
    showMotivationalMessage() {
        if (this.motivationalMessages.length === 0) {
            this.loadMotivationalMessages();
        }
        
        const randomMessage = this.motivationalMessages[
            Math.floor(Math.random() * this.motivationalMessages.length)
        ];
        
        this.motivationMessage.textContent = randomMessage;
        this.motivationMessage.classList.add('show');
        
        setTimeout(() => {
            this.hideMotivationalMessage();
        }, 3000);
    }
    
    hideMotivationalMessage() {
        this.motivationMessage.classList.remove('show');
    }
    
    addToHistory(customText = null) {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        const historyItem = {
            text: customText || `${this.getDhikrText()} - ${this.count} times`,
            time: timeString,
            timestamp: now.getTime()
        };
        
        this.history.unshift(historyItem);
        
        // Keep only last 50 items
        if (this.history.length > 50) {
            this.history = this.history.slice(0, 50);
        }
        
        this.updateHistory();
    }
    
    updateHistory() {
        if (this.history.length === 0) {
            this.historyList.innerHTML = `
                <div class="empty-history" data-key="no_activity">
                    No activity yet. Start counting to see your progress!
                </div>
            `;
            return;
        }
        
        this.historyList.innerHTML = this.history.map(item => `
            <div class="history-item slide-up">
                <span class="history-text">${item.text}</span>
                <span class="history-time">${item.time}</span>
            </div>
        `).join('');
    }
    
    clearHistory() {
        if (confirm(this.getTranslation('confirm_clear_history', 'Are you sure you want to clear the history?'))) {
            this.history = [];
            this.updateHistory();
            this.saveData();
        }
    }
    
    getTranslation(key, fallback) {
        if (window.translations && window.translations[this.currentLang] && window.translations[this.currentLang][key]) {
            return window.translations[this.currentLang][key];
        }
        return fallback;
    }
    
    updateLanguage(lang) {
        this.currentLang = lang;
        this.loadMotivationalMessages();
        this.updateDisplay();
        
        // Update dhikr select options
        const options = this.dhikrSelect.querySelectorAll('option');
        options.forEach(option => {
            const key = option.getAttribute('data-key');
            if (key && window.translations[lang] && window.translations[lang][key]) {
                option.textContent = window.translations[lang][key];
            }
        });
    }
}

// Initialize counter when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.tasbihCounter = new TasbihCounter();
});