function sendCode() {
    event.preventDefault();
    document.getElementById("step-email").style.display = "none";
    document.getElementById("step-code").style.display = "block";
  
    const codeInputs = document.getElementById("codeInputs");
    const numberOfDigits = 6; // Defina o número de dígitos do código
  
    // Cria um input separado para cada dígito do código
    for (let i = 0; i < numberOfDigits; i++) {
      const input = document.createElement("input");
      input.type = "text";
      input.maxLength = 1; // Permite apenas um caractere por input
      input.setAttribute("data-index", i + 1); // Atributo para identificar o índice do input
      input.className = "code-digit"; // Classe para estilização
      input.oninput = function () {
        const nextIndex = parseInt(this.getAttribute("data-index")) + 1;
        const nextInput = document.querySelector(`[data-index="${nextIndex}"]`);
        if (nextInput && this.value) {
          nextInput.focus();
        }
      };
      codeInputs.appendChild(input);
    }
  }


  //pop-up
function showPopup() {
    document.getElementById('successPopup').style.display = 'block';
  }
  
  function showPopup() {
    document.getElementById('successPopup').style.display = 'block';
  }
  
  // Adicione um evento de clique no botão "Fechar" dentro do pop-up
  document.getElementById('successPopup').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
      if (event.target.classList.contains('close-button')) {
        document.getElementById('successPopup').style.display = 'none';
      }
    }
  });

  function verifyCode() {
    event.preventDefault()
    // ...
    // Após a verificação bem-sucedida:
    showPopup();

    
  }

  function verifyCode() {
    event.preventDefault();
    // Aqui você faria a verificação do código inserido pelo usuário
    // Se a verificação for bem-sucedida, esconda o passo do código e mostre o formulário de nova senha
    document.getElementById("step-code").style.display = "none";
    document.getElementById("step-new-password").style.display = "block";
  }

  function setNewPassword() {
    event.preventDefault();
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Verifique se as senhas coincidem
    if (newPassword === confirmPassword) {
      // Aqui você definiria a lógica para definir a nova senha do usuário
      // Isso poderia incluir fazer uma solicitação para atualizar a senha no backend
      // Depois de definir com sucesso a nova senha, você pode exibir uma mensagem de sucesso ou redirecionar o usuário para a página de login
      showPasswordChangedPopup();
      // Por exemplo:
      // window.location.href = "../login.html"; // Redireciona para a página de login
    } else {
      alert("As senhas não coincidem. Tente novamente.");
    }
  }

  function showPasswordChangedPopup() {
    // Aqui você exibiria um pop-up ou uma mensagem de sucesso informando que a senha foi alterada com sucesso
    // Por exemplo:
    document.getElementById('successPopup').style.display = 'block';
  }