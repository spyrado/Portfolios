var tamanhoTela = 1024;

function menuInterativo(){
    configuraMenuOnResize();
    configuraMenuOnLoad();
}

function verificaTamanhoTela(tamanho){
    let result = $(document).width() >= tamanho ? true : false;
    return result;
}

function adicionaClasse(seletor, classe){
    $(seletor).addClass(classe);
}
function removeClasse(seletor, classe){
    $(seletor).removeClass(classe);
}
function configuraMenuOnLoad(){
    if(verificaTamanhoTela(tamanhoTela)){
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
       if(verificaTamanhoTela(tamanhoTela)){
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