/**
 * Dark Mode Controller
 * Controla a alternância entre temas claro e escuro
 * @version 1.0
 */

class DarkMode {
  constructor() {
    this.toggleButton = document.getElementById('dark-mode-toggle');
    this.htmlElement = document.documentElement;
    this.iconSun = '<i class="fas fa-sun"></i>';
    this.iconMoon = '<i class="fas fa-moon"></i>';
    
    this.init();
  }
  
  init() {
    this.loadPreference();
    this.setupEventListeners();
  }
  
  loadPreference() {
    try {
      const savedMode = localStorage.getItem('theme');
      if (savedMode === 'dark') {
        this.enableDarkMode();
      }
    } catch (e) {
      console.error('Error accessing localStorage:', e);
    }
  }
  
  setupEventListeners() {
    this.toggleButton.addEventListener('click', () => this.toggleMode());
  }
  
  toggleMode() {
    if (this.htmlElement.getAttribute('data-theme') === 'dark') {
      this.disableDarkMode();
    } else {
      this.enableDarkMode();
    }
  }
  
  enableDarkMode() {
    this.htmlElement.setAttribute('data-theme', 'dark');
    this.toggleButton.innerHTML = this.iconSun;
    this.savePreference('dark');
  }
  
  disableDarkMode() {
    this.htmlElement.removeAttribute('data-theme');
    this.toggleButton.innerHTML = this.iconMoon;
    this.savePreference('light');
  }
  
  savePreference(theme) {
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      console.error('Error saving to localStorage:', e);
    }
  }
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  new DarkMode();
});
