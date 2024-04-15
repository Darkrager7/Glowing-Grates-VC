//Definition of function to enable high contrast mode
//Program checks if high contrast mode has been enabled, when enabled via button, the stylesheet it's linked to will overwrite the settings on the page
function toggleHighContrastMode(){
    const isHighContrast = document.documentElement.classList.toggle('high-contrast-mode');
    localStorage.setItem('high-contrast-mode', isHighContrast);

}

const isHighContrast = localStorage.getItem('high-contrast-mode') === 'true';

if(isHighContrast) {
    document.documentElement.classList.add('high-contrast-mode');
}