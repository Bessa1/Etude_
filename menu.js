let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')


btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')

})


menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')

})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')

})


window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) { // Ajuste o valor conforme necessário
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});




 // Função para exibir o formulário ao clicar no botão de contato
 document.querySelector('.btn-contato button').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
});

// Função para fechar o formulário ao clicar no botão de fechar (X)
document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
});

// Função para fechar o formulário ao clicar fora dele
window.onclick = function(event) {
    var modal = document.getElementById('overlay');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Aqui você pode adicionar o código para enviar o formulário (não implementado aqui)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar o envio real do formulário para este exemplo
    // Adicione aqui o código para enviar os dados do formulário (AJAX, fetch, etc.)
    // Depois de enviar com sucesso, você pode ocultar o formulário novamente
    document.getElementById('overlay').style.display = 'none';
});


function openContactForm() {
    document.getElementById('overlay').style.display = 'block';
}

// Função para fechar o formulário ao clicar no botão de fechar (X)
document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
});

document.getElementById('btn-entre-contato').addEventListener('click', openContactForm);

