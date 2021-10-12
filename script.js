function isNum(userNumber) {
  userNumber = !isNaN(parseFloat(userNumber)) && isFinite(userNumber);
}
const game = function () {
  const randomNumber = Math.floor((Math.random() * 100) + 1);

  return function repeat() {
    let userNumber = prompt('Введи число!');
    if (userNumber === null) {
      alert('Игра окончена!');

    }
    if (userNumber < randomNumber) {
      alert('Загаданное число меньше');

    }
    else if (userNumber > randomNumber) {
      alert('Загаданное число больше');

    }
    else {
      alert('Поздравляю, Вы угадали!!!');
      return repeat() 
     
    }
    
  }
  
}



