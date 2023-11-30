function to_top(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Função para mostrar o botão quando o usuário rolar a página
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const buttonWpp = document.getElementById("wppBtn");
    const myButton = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
        buttonWpp.style.right = "90px"
    } else {
        myButton.style.display = "none";
        buttonWpp.style.right = "20px"
    }
};

document.getElementById('mostrartudo').addEventListener('click', function() {
    var ids = ['#Formulario', '#NosConheca', '#Compromissos', '#NosContratar', '#NossosServicos'];
    ids.forEach(function(id) {
        var elemento = document.querySelector(id);
        elemento.style.display = 'block';
    });
});