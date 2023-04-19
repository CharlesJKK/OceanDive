const btn = document.querySelector('.fa-eye');
const usuario = document.querySelector('#usuario');
const userLabel = document.querySelector('#userLabel');
const cpf = document.querySelector('#cpf');
const labelCpf = document.querySelector('#labelCpf');
const senha = document.querySelector('#senha');
const senhaLabel = document.querySelector('#senhaLabel');
const msgError = document.querySelector('#msgError');


btn.addEventListener('click', () => {
  const inputSenha = document.querySelector('#senha');
  const inputCpf = document.querySelector('#cpf');

  if (inputSenha.getAttribute('type') === 'password') {
    inputSenha.setAttribute('type', 'text');
    inputCpf.setAttribute('type', 'text');
  } else {
    inputSenha.setAttribute('type', 'password');
    inputCpf.setAttribute('type', 'password');
  }
});


usuario.addEventListener('input', () => {
  userLabel.removeAttribute('style');
  usuario.removeAttribute('style');
});

cpf.addEventListener('input', () => {
  labelCpf.removeAttribute('style');
  cpf.removeAttribute('style');
});

senha.addEventListener('input', () => {
  senhaLabel.removeAttribute('style');
  senha.removeAttribute('style');
});


function entrar() {
  let listaUser = [];
  let userValid = { nome: null, user: null, cpf: null, senha: null };
  
  listaUser = JSON.parse(localStorage.getItem('listaUser'));

  if (listaUser !== null) {
    listaUser.forEach((item) => {
      if (usuario.value === item.userCad && senha.value === item.senhaCad) {
        userValid = {
          nome: item.nomeCad,
          user: item.userCad,
          cpf: item.cpfCad,
          senha: item.senhaCad
        };
      }
    });
  }

  if (usuario.value === userValid.user && senha.value === userValid.senha && cpf.value === userValid.cpf) {
    window.location.href = './index.html';
    const mathRandom = Math.random().toString(16).substr(2);
    const token = mathRandom + mathRandom;
    localStorage.setItem('token', token);
    localStorage.setItem('userLogado', JSON.stringify(userValid));
  } else {
    userLabel.style.color = 'red';
    usuario.style.borderColor = 'red';
    senhaLabel.style.color = 'red';
    senha.style.borderColor = 'red';
    msgError.style.display = 'block';
    msgError.innerHTML = 'Usuário ou senha incorretos';
    usuario.focus();
  }
}
