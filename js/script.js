window.onload = function() {
    function ajustarAlturaImagem() {
        var formulario = document.getElementById('form-contato');
        var imagemLateral = document.getElementById('imagem-lateral');
        imagemLateral.style.height = formulario.offsetHeight + 'px';
    }

    // Chama a função para ajustar a altura da imagem quando a página é carregada
    ajustarAlturaImagem();

    // Adiciona um ouvinte de evento para o redimensionamento da janela
    window.addEventListener('resize', function() {
        // Chama a função para ajustar a altura da imagem quando a janela é redimensionada
        ajustarAlturaImagem();
    });
};
