document.addEventListener('DOMContentLoaded', () => {
    const mainHeader = document.querySelector('.main-header');
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = mainNav.querySelectorAll('a');
    let lastScrollY = window.scrollY;
    const headerHeight = mainHeader.offsetHeight;

    /**
     * Função para controlar o comportamento do header ao rolar a página.
     */
    function handleHeaderScroll() {
        if (window.scrollY > lastScrollY && window.scrollY > headerHeight) {
            // Rolando para baixo e já passou da altura inicial do header
            mainHeader.classList.add('header-hidden');
        } else if (window.scrollY < lastScrollY || window.scrollY <= headerHeight) {
            // Rolando para cima ou no topo da página
            mainHeader.classList.remove('header-hidden');
        }
        lastScrollY = window.scrollY;
    }

    /**
     * Função para alternar o estado do menu hambúrguer.
     */
    function toggleMenu() {
        mainNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
        document.body.classList.toggle('no-scroll'); // Controla o scroll do body
    }

    /**
     * Função para fechar o menu hambúrguer.
     */
    function closeMenu() {
        mainNav.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }

    // Event Listeners
    window.addEventListener('scroll', handleHeaderScroll);
    menuToggle.addEventListener('click', toggleMenu);

    // Fechar o menu ao clicar em um link de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Pequeno delay para a rolagem da âncora ocorrer antes do fechamento total
            setTimeout(closeMenu, 300); 
        });
    });

    // Opcional: Fechar o menu se o redimensionamento da janela for maior que o breakpoint mobile
    // Isso é útil se o usuário redimensionar a tela para desktop com o menu aberto
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && mainNav.classList.contains('active')) {
            closeMenu();
        }
    });

    // Ajuste inicial do padding do body caso a página seja recarregada no meio do scroll
    handleHeaderScroll(); 
});