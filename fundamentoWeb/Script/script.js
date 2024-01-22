function enviar(){ //Função do botão para receber uma mensagem de alerta
    alert("Entrarei em contato em breve... " );
  }

function validaNome(){
  // Chamando
  let txt = document.querySelector("#txtNome")
  if(nome.value.length < 3){
    txt.innerHTML = "Nome Inválido"
    txt.style.color = "red"
  }else{
    txt.innerHTML = "Nome Válido"
    txt.style.color = "green"
  }
}

function validaEmail(){
  // Chamando
  let txtE = document.querySelector("#txtEmail")
  if(email.value.length){
    txtE.innerHTML = "Email Inválido"
    txtE.style.color = "red"
  }else{
    txtE.innerHTML = "Email Válido"
    txtE.style.color = "green"
  }
}

  