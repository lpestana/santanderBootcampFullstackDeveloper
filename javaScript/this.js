function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Nicoloas',
	idade: 12,
};

const pessoa2 = {
	nome: 'Luiz',
	idade: 1,
};

const pessoa3 = {
	nome: 'Nataline',
	idade: 38,
};

console.log(calculaIdade.call(pessoa3, 12));
console.log(calculaIdade.apply(pessoa2, [15]));