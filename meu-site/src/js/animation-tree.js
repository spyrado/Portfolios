let $nodeLeft = $('.section-skill-tree .node-left')
    ,$nodeRight = $('.section-skill-tree .node-right')
    ,$log = $('.section-skill-tree .log')
    ,$seeLeft = $('.see-left')
    ,$seeRight = $('.see-right');




$nodeLeft.animate({   
    opacity: .3
},500);

$nodeLeft.animate({   
    borderBottomWidth: "7px",
    opacity: 1
},500);

setTimeout(function(){
    
    $seeLeft.animate({   
        opacity: 1
    },1000);
    
}, 1000);

setTimeout(function(){
    
    $nodeRight.animate({
        opacity: .3
    },500);
    
    $nodeRight.animate({   
        borderBottomWidth: "7px",
        opacity: 1
    },500);

    setTimeout(function(){

        $seeRight.animate({   
            opacity: 1
        },1000);

    }, 1000);
    
}, 2000);    

function iniciaNode(node, opacity, tempo,[]){
    let prop = {
        opacidadeInicial: opacity,
        opacidadeFinal: opacity,
        borderBottomWidth: tamanho
    }
    node.animate({   
        opacity: prop.opacidadeInicial
    },tempo);
}