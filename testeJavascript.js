var usuarios = [{
    id: 15,
    nome: 'MARIA'
}, {
    id: 22,
    nome: 'JOSÉ'
}, {
    id: 25,
    nome: 'ANDERSON'
}, {
    id: 24,
    nome: 'ADMINISTRADOR'
}, {
    id: 35,
    nome: 'MARTA'
}, {
    id: 36,
    nome: 'MAISTRE'
}, {
    id: 47,
    nome: 'ANTONIO'
}, {
    id: 18,
    nome: 'JORGE'
}, {
    id: 49,
    nome: 'WILLIAM'
}, {
    id: 20,
    nome: 'MARCOS'
}]

// FUNÇÃO DE PAGINAÇÃO
// paginaAlvo RECEBE A PAGINA A SER EXIBIDA
// itensPorPg RECEBE QUANDOS ITENS SERÃO EXIBIDOS POR PAGINA

function listItems(array, paginaAlvo, itensPorPg) {
    let resultado = [];
    let totalPage = Math.ceil(array.length / itensPorPg);
    let count = (paginaAlvo * itensPorPg) - itensPorPg;
    let delimiter = count + itensPorPg;
    if (paginaAlvo <= totalPage) {
        for (let i = count; i < delimiter; i++) {
            if (array[i] != null) {
                resultado.push(array[i]);
            }
            count++;
        }
    }
    console.log('Exibindo pagina ' + paginaAlvo);

    return resultado;
};

// FUNÇÃO RETORNA UMA LISTA COM ATÉ 10 NOMES A PARTIR DO NOME SELECIONADO 

function pegaNomes(nome) {
    
    for (let i = 0; i < usuarios.length; i++) {
        usuarios[i].posicao = i + 1;
    }
    let primeiroNome =  usuarios.find(element => element.nome === nome);

    let resultado = usuarios.slice(primeiroNome.posicao - 1, primeiroNome.posicao + 9);
    
    return resultado; 
}

console.log(listItems(usuarios, 2, 2));
console.log(pegaNomes('ANTONIO'));