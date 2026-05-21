function validarCpf(cpf) {
  if (cpf === "" || cpf === null || cpf === undefined) {
    throw new Error("CPF é obrigatório");
  }

  const digitos = cpf.replace(/\D/g, "");

  if (digitos.length !== 11) {
    return { ok: false, razao: "tamanho-invalido" };
  }

  if (/^(\d)\1{10}$/.test(digitos)) {
    return { ok: false, razao: "digitos-repetidos" };
  }

  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(digitos[i], 10) * (10 - i);
  }
  let primeiroDigito = (soma * 10) % 11;
  if (primeiroDigito === 10) primeiroDigito = 0;
  if (primeiroDigito !== parseInt(digitos[9], 10)) {
    return { ok: false, razao: "digito-verificador-1" };
  }

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(digitos[i], 10) * (11 - i);
  }
  let segundoDigito = (soma * 10) % 11;
  if (segundoDigito === 10) segundoDigito = 0;
  if (segundoDigito !== parseInt(digitos[10], 10)) {
    return { ok: false, razao: "digito-verificador-2" };
  }

  return true;
}

module.exports = { validarCpf };
