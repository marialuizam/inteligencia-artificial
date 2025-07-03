document.addEventListener('DOMContentLoaded', () => {
    const saibaMaisBtn = document.getElementById('saibaMaisBtn');

    if (saibaMaisBtn) {
        saibaMaisBtn.addEventListener('click', () => {
            alert('Explore mais sobre a Inteligência Artificial em nosso site!');
            // Você pode adicionar um scroll suave para a próxima seção aqui
            // Por exemplo: document.getElementById('conceitos').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Exemplo de uma funcionalidade mais complexa (opcional):
    // Adicionar um efeito de destaque ao passar o mouse sobre os cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.02)';
            card.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});