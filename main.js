let randomNumber = Math.floor(Math.random() * 100 )
let tries = 0 
console.log(randomNumber)

function checkGuess(){
    let guess = document.getElementById('guess').value
    let message = document.getElementById('message')
    tries++

    if (guess == randomNumber) {
        message.innerHTML = 'Parabéns❤️, você adivinhou o número em ' + tries + ' tentativas !'
    }
    else if (guess < randomNumber) {
        message.innerHTML = 'Muito baixo... Tente novamente!'
    }

    else  {
        message.innerHTML = 'Muito alto... Tente novamente!'
    }
}