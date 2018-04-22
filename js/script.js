/* BEM VINDO, MARINHEIRO 
   O desafio demorou mas saiu rápido
   Antes de tudo, leia todas as dicas e obersações no link do desafio
   ...
   *-* Todo conteudo dentro de $(document).ready( function() { ... } ); será execultado assim que carregar a página
*/


$(document).ready(function() {

    $('.fa').click(function(){
        $("#alerta").hide();
    })

    $("a").on('click', function(event) {

    if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){

                window.location.hash = hash;
        });
        } 
    });

    stylebutton();
    descricoes();

    $('#alerta').draggable();
    contador();
    sendEmail();

});


function sendEmail(){

    $("#novidadesform [type='submit']").click(function(e) {
        e.preventDefault();


        var valor = $("input[name=email]" ).val();

        if(valor == "") toastr.error('Preencha um email!', 'Error!');
        else {

            $.ajax({
                url: 'http://51.254.204.44/ti/enviar_email.php',
                type: 'post',
                data: {'meuemail':valor},
                dataType: 'JSON',

                success: function(retorno){
                    toastr.success(retorno.text);

                    $(".resultado").html(valor + " foi salvo em nossa lista de novidades =)");
                    
                    setTimeout(toggleAlert,3000);
                },

                error: function(erro){
                    toastr.error(erro.responseJSON['text']);
                }
            });
        }
    });
}

function toggleAlert() {
    $('#alerta').slideToggle();
}

var i = 5;
var myVar;

function myTimer() {

    if(i <= 3) $('#contador').css({'color': 'red'}); 
    else  $('#contador').css({'color': 'black'});
    if(i == 0) myStopFunction();

    $('#contador').text("Alerta aparecendo em: " + i);

    i = i - 1;
}

function myStopFunction() {
    clearInterval(myVar);
    $('#contador').hide(); 

    toggleAlert();
}

function contador() {
    $('#contador').show();

    myVar = setInterval(function(){ myTimer() }, 1000);
}

// Estilizacao dos butoes da pagina


function stylebutton(){

    $('.buttonHtml1').mouseenter(function(){
        $('.buttonHtml1').css("background-color", "#D65B43");
    });

    $('.buttonHtml1').mouseleave(function(){
        $('.buttonHtml1').css("background-color", "#FF7F00");
    });

    $('.buttonHtml2').mouseenter(function(){
        $('.buttonHtml2').css("background-color", "#D65B43");
    });

    $('.buttonHtml2').mouseleave(function(){
        $('.buttonHtml2').css("background-color", "#FF7F00");
    });

    $('.buttonHtmlCss').mouseenter(function(){
        $('.buttonHtmlCss').css("background-color", "##6CC5EB");
    });

    $('.buttonHtmlCss').mouseleave(function(){
        $('.buttonHtmlCss').css("background-color", "#FF7F00");
    });

    $('.buttonJS').mouseenter(function(){
        $('.buttonJS').css("background-color", "#F3CA4B");
    });

    $('.buttonJS').mouseleave(function(){
        $('.buttonJS').css("background-color", "#FF7F00");
    });

    $('.buttonRuby').mouseenter(function(){
        $('.buttonRuby').css("background-color", "#B21300");
    });

    $('.buttonRuby').mouseleave(function(){
        $('.buttonRuby').css("background-color", "#A72D3A");
    });


    $('.buttonHeroku').mouseenter(function(){
        $('.buttonHeroku').css("background-color", "#8A2BFF");
    });

    $('.buttonHeroku').mouseleave(function(){
        $('.buttonHeroku').css("background-color", "#A72D3A");
    });

    $('.VMHTML').mouseenter(function(){
        $('.VMHTML').css("background-color", "#FF7F00");
    });

    $('.VMHTML').mouseleave(function(){
        $('.VMHTML').css("background-color", "black");
    });

    $('.VMRuby').mouseenter(function(){
        $('.VMRuby').css("background-color", "A72D3A");
    });

    $('.VMRuby').mouseleave(function(){
        $('.VMRuby').css("background-color", "black");
    });
}