const btnContato = document.querySelector('#btnContato');

if(btnContato) {
  btnContato.addEventListener('click', (e) => {
    e.preventDefault();
    
    const elements = {
      nome: document.querySelector('#nome'),
      email: document.querySelector('#email'),
      assunto: document.querySelector('#assunto')
    }
  
    if(!elements.nome.value || !elements.email.value || !elements.assunto.value || elements.nome.value == '' || elements.email.value == '' || elements.assunto.value == '') {
      sendAlert('Erro!', 'Você precisa preencher os campos antes de enviar!');
    } else {
      sendAlert('Mensagem enviada!', `Nome: ${elements.nome.value} <br/> Email: ${elements.email.value} <br/> Assunto: ${elements.assunto.value} `);
    }
  });
}

const btnLogin = document.querySelector('#btnLogin');

if(btnLogin) {
  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    
    const elements = {
      username: document.querySelector('#username'),
      password: document.querySelector('#password')
    }
  
    if(!elements.username.value || !elements.password.value || elements.username.value == '' || elements.password.value == '') {
      sendAlert('Erro!', 'Você precisa preencher os campos antes de enviar!');
    } else if(elements.username.value == 'admin' || elements.password.value == 'admin') {
      sendAlert('Sucesso!', 'Login efetuado com sucesso.')
    } else {
      sendAlert('Erro!', 'Credenciais invalidas.');
    }
  });
}
 
// preferi fazer o meu alert 😅
function sendAlert(title, msg) {
  const notifyDiv = document.querySelector('#notify');
  const notifyTitle = document.querySelector('.notifyTitle');
  const notifyDesc = document.querySelector('.notifyDesc');

  notifyTitle.innerHTML = title;
  notifyDesc.innerHTML = msg;
  
  notifyDiv.setAttribute('class', 'appear');
  setTimeout(() => {
    notifyDiv.removeAttribute('class', 'appear')
  }, 5000);
}