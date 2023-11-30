//efeito de esconder formulário de cadastro
var ids = ['#Formulario', '#NosConheca', '#Compromissos', '#NosContratar','#NossosServicos'];
var botoes = ['#btHome', '#btSobrenos', '#btPortfolio', '#btDuvidas', '#btSolicitacao'];

$(document).ready(function(){
    $('#btSobrenos').click(function(event){
        event.preventDefault();
        $('#Formulario').slideToggle('slow');  
        $('#NosConheca').slideToggle('slow');
    })
});