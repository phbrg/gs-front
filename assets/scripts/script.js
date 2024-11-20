const btnForm = document.querySelector('#btnForm');

btnForm.addEventListener('click', (e) => {
  e.preventDefault();
  
  const elements = {
    nome: document.querySelector('#nome'),
    email: document.querySelector('#email'),
    assunto: document.querySelector('#assunto')
  }

  if(!elements.nome.value || !elements.email.value || !elements.assunto.value || elements.nome.value == '' || elements.email.value == '' || elements.assunto.value == '') {
    alert('Você precisa preencher os campos antes de enviar!')
  } else {
    sendAlert('Mensagem enviada!', `Nome: ${elements.nome.value} <br/> Email: ${elements.email.value} <br/> Assunto: ${elements.assunto.value} `)
  }
});

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