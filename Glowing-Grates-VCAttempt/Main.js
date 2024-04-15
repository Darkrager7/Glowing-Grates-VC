
function toggleHighContrastMode(){
    const isHighContrast = document.documentElement.classList.toggle('high-contrast-mode');
    localStorage.setItem('high-contrast-mode', isHighContrast);

}

const isHighContrast = localStorage.getItem('high-contrast-mode') === 'true';

if(isHighContrast) {
    document.documentElement.classList.add('high-contrast-mode');
}