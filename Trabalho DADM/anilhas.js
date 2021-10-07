var produtos = [];
var padrao = 90;

function limpar(item){
    var b = document.querySelector(`label[for=${item}]`).textContent;
    b = b.split(' ');
    b = b[b.length - 1];
    b = b.split('(');
    b = b[b.length - 1];
    b = b.split('R$');
    b = b[b.length - 1];
    b = b.split(',00)');
    b = b[0]
    if (item == undefined){
        item = 0
    }
    else item = b
};

function atrib(){
    const anilha = document.querySelector('input[name=anilha]:checked').value;
    const barra = document.querySelector('input[name=barras ]:checked').value;
    const presilha = document.querySelector('input[name=presilha]:checked').value;
    const luva = document.querySelector('input[name=luva]:checked').value;
    const almofada = document.querySelector('input[name=almofada]:checked').value;
    produtos = [anilha, barra, almofada, presilha, luva]
    iter(produtos);
}

function iter(prod){
    for (var i = 0; i < prod.length; i++) {
        limpar(prod[i])
    }
}

document.getElementById('resultado').value = padrao + 