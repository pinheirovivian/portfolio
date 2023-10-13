// Função para alternar o modo claro e escuro
function toggleDarkMode() {
    const isDarkMode = document.body.classList.contains('dark');
    if (isDarkMode) {
        document.body.classList.remove('dark');
        localStorage.setItem('darkMode', 'disabled');
    } else {
        document.body.classList.add('dark');
        localStorage.setItem('darkMode', 'enabled');
    }
}

// Adicionar um evento de clique no botão de alternância de tema
const themeToggle = document.getElementById('change-theme');
themeToggle.addEventListener('click', toggleDarkMode);

// Função para rolagem suave ao clicar nos links de navegação
function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
        });
    }
}

// Adicionar eventos de clique para rolagem suave dos links de navegação
const navLinks = document.querySelectorAll('.link');
navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        smoothScroll(target);
    });
});
