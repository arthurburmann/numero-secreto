function verificaChuteValido(chute) {
    const numero = +chute;

    if (chuteInvalido(numero)) {
        console.log('Valor inválido');
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }
    
    if (numeroMaiorOuMenorPermitido(numero)) {
        console.log(`Valor inválido. O número secreto está entre ${menorValor} e ${maiorValor}.`);
        elementoChute.innerHTML += `
            <div>Valor inválido. O número secreto está entre ${menorValor} e ${maiorValor}.</div>
        `;
        return
    }

    if (numero === numeroSecreto) {
        console.log('Você acertou!');
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}.
            <br>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `;
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `;
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id = 'jogar-novamente') {
        window.location.reload();
    }
})