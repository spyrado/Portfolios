var tela_1024 = 1024;
var tela_1023 = 1023;

function menuInterativo(){
    interandoComMenu();
    configuraMenuOnResize();
    configuraMenuOnLoad();
    hideMenuOnScroll();
}


function configuraMenuOnLoad(){
    if(tamanhoTelaMaiorQue(tela_1024)){
            adicionaClasse($(".navbar"),"container");
            removeClasse($(".navbar-brand"),"border-right");
            removeClasse($(".menu-header"),"fixed-bottom");
            adicionaClasse($(".menu-header"),"fixed-top");
            removeClasse($(".menu-header"),"border-top");
            adicionaClasse($(".menu-header"),"border-bottom");
            limpaClassesMobile();
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
    let menuHeader = $(".menu-header");
    $(window).resize(function(){
       if(tamanhoTelaMaiorQue(tela_1024)){
            adicionaClasse($(".navbar"),"container");
            removeClasse($(".navbar-brand"),"border-right");
            removeClasse(menuHeader,"fixed-bottom");
            adicionaClasse(menuHeader,"fixed-top");
            removeClasse(menuHeader,"border-top");
            adicionaClasse(menuHeader,"border-bottom");
            limpaClassesMobile();
            //verificaSeLiFoiClicada
            
            //hideMenuOnScroll
            menuHeader.removeClass("show-menu hide-menu");
       }else{
            removeClasse($(".navbar"),"container");
            adicionaClasse($(".navbar-brand"),"border-right");
            adicionaClasse(menuHeader,"fixed-bottom");
            removeClasse(menuHeader,"fixed-top");
            adicionaClasse(menuHeader,"border-top");
            removeClasse(menuHeader,"border-bottom");
            incluiClassesMobile();
           
            //hideMenuOnScroll
            menuHeader.addClass("show-menu");
            menuHeader.removeClass("hide-menu");
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
    let menuHeader = $(".menu-header");
    
    
        
        $(document).scroll(function(){
            if(tamanhoTelaMenorQue(tela_1023)){
                
                if($(this).scrollTop() > scrollInicial){
                    menuHeader.removeClass("show-menu");
                    menuHeader.addClass("hide-menu");
                }else{
                    menuHeader.removeClass("hide-menu");
                    menuHeader.addClass("show-menu");
                }
                scrollInicial = $(this).scrollTop();
            }else{
             menuHeader.removeClass("show-menu hide-menu");
            }
        });
    }

function limpaClassesMobile(){
    $(".navbar-nav").find(".nav-item").each(function(i,e){
       $(e).find(".nav-link").removeClass("d-none"); 
    });
}
function incluiClassesMobile(){
    $(".navbar-nav").find(".nav-item").each(function(i,e){
        if(!$(this).hasClass("selected"))
            $(e).find(".nav-link").addClass("d-none"); 
    });
}

function tamanhoTelaMaiorQue(tamanhoMaior){
    return $(document).width() >= tamanhoMaior ? true : false;
}
function tamanhoTelaMenorQue(tamanhoMenor){
    return $(document).width() <= tamanhoMenor ? true : false;
}
function adicionaClasse(seletor, classe){
    $(seletor).addClass(classe);
}
function removeClasse(seletor, classe){
    $(seletor).removeClass(classe);
}