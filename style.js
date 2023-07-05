const usernameInput = document.getElementById('login-usuario')
const errorMessages = document.getElementsByClassName('error-text')
const passwordInput = document.getElementById('login-senha')

//digitou o username errado

usernameInput.classList.add('error')
errorMessages[0].classList.add('visible')

//acertou o username e errou  senha

usernameInput.classList.remove('error')
errorMessages[0].classList.remove('visiable')
usernameInput.classList.add('correct')

//errou a senha

passwordInput.classList.add('error')
errorMessages[1].classList.add('visible')
