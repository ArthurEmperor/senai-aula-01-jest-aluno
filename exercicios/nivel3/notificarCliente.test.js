const { notificarCliente } = require("./notificarCliente");

// TODO: 3 testes usando jest.fn().
//   - enviarSms foi chamado 1 vez (toHaveBeenCalledTimes(1))
//   - enviarSms recebeu telefone e mensagem corretos (toHaveBeenCalledWith)
//   - telefone vazio → enviarSms NÃO foi chamado (not.toHaveBeenCalled)

test.todo("com telefone válido, enviarSms é chamado uma vez");
test.todo(
  "com telefone válido, enviarSms recebe { telefone, mensagem } corretos",
);
test.todo("com telefone vazio, enviarSms NÃO é chamado");
