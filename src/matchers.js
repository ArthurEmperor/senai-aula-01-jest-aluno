function somar(a, b){
    return a + b;
}

function criarUsuario(nome, email){
    return { nome, email, ativo: true};
}

function listarChamadosAbertos(chamados){
    return chamados.filter(chamado => chamado.status === 'aberto').map(chamado => chamado.titulo);
}

function dividir(a, b){
    if  (b === 0) {
        throw new Error('Divisão por zero não é permitido');
    }
        return a / b
}



module.exports = ({ somar, criarUsuario, listarChamadosAbertos, dividir})