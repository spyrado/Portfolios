var tela_1024 = 1024;
var tela_1023 = 1023;

function menuInterativo(){
    interandoComMenu();
    configuraMenuOnResize();
    configuraMenuOnLoad();
}

function tamanhoTelaMaiorQue(tamanhoMaior){
    let result = $(document).width() >= tamanhoMaior ? true : false;
    return result;
}
function tamanhoTelaMenorQue(tamanhoMenor){
    let result = $(document).width() <= tamanhoMenor ? true : false;
    return result;
}
function adicionaClasse(seletor, classe){
    $(seletor).addClass(classe);
}
function removeClasse(seletor, classe){
    $(seletor).removeClass(classe);
}
function configuraMenuOnLoad(){
    if(tamanhoTelaMaiorQue(tela_1024)){
            adicionaClasse($(".navbar"),"container");
            removeClasse($(".navbar-brand"),"border-right");
            removeClasse($(".menu-header"),"fixed-bottom");
            adicionaClasse($(".menu-header"),"fixed-top");
            removeClasse($(".menu-header"),"border-top");
            adicionaClasse($(".menu-header"),"border-bottom");
       }else{
            removeClasse($(".navbar"),"container");
            adicionaClasse($(".navbar-brand"),"border-right");
            adicionaClasse($(".menu-header"),"fixed-bottom");
            removeClasse($(".menu-header"),"fixed-top");
            adicionaClasse($(".menu-header"),"border-top");
            removeClasse($(".menu-header"),"border-bottom");
       }
}
function configuraMenuOnResize(){
    $(window).resize(function(){
       if(tamanhoTelaMaiorQue(tela_1024)){
            adicionaClasse($(".navbar"),"container");
            removeClasse($(".navbar-brand"),"border-right");
            removeClasse($(".menu-header"),"fixed-bottom");
            adicionaClasse($(".menu-header"),"fixed-top");
            removeClasse($(".menu-header"),"border-top");
            adicionaClasse($(".menu-header"),"border-bottom");
       }else{
            removeClasse($(".navbar"),"container");
            adicionaClasse($(".navbar-brand"),"border-right");
            adicionaClasse($(".menu-header"),"fixed-bottom");
            removeClasse($(".menu-header"),"fixed-top");
            adicionaClasse($(".menu-header"),"border-top");
            removeClasse($(".menu-header"),"border-bottom");
       }
    });
}
function interandoComMenu(){
    verificaSeLiFoiClicada();
}
function verificaSeLiFoiClicada(){
    if(tamanhoTelaMenorQue(tela_1023)){
        let selected = $(".navbar-nav").find(".selected");
        let listaLi = $(".navbar-nav").find(".nav-item");
        $(".menu-header .nav-item").click(function(){
            let self = $(this);
            exibeNomeIcone(self,listaLi, selected);
        });
    }
}
function exibeNomeIcone(self,listaLi, selected){
    if(!self.hasClass("selected")){
        let selectAnterior = self.parent().find(".selected");
        selectAnterior.removeClass("selected");
        selectAnterior.find(".nav-link").removeClass("d-block");
        selectAnterior.find(".nav-link").addClass("d-none");
        removeClasse(self.find(".nav-link"),"d-none");
        adicionaClasse(self, "selected");
    }
}
function hideMenuOnScroll(){
    let scrollInicial = 0;
    $(document).scroll(function(){
        if($(this).scrollTop() > scrollInicial){
            $(".menu-header").addClass("hide-menu");
        }else{
            $(".menu-header").removeClass("hide-menu");
        }
        scrollInicial = $(this).scrollTop();
    });
}