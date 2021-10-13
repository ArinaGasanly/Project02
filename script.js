function isNum(userNumber) {
  userNumber = !isNaN(parseFloat(userNumber)) && isFinite(userNumber);
}
function gameStart() {
  const randomNumber = Math.floor((Math.random() * 100) + 1);

  return function repeat() {
    let userNumber = prompt('Введи число!');

    if (userNumber > randomNumber) {
      alert('Загаданное число меньше');
      return repeat()
    }
    if (userNumber < randomNumber) {
      alert('Загаданное число больше');
      return repeat()
    }
    else if (isNaN(userNumber)) {
      alert('Это не число!');
      return repeat()
    }
    else if (userNumber === null) {
      alert('Игра окончена');

    }
    else {
      alert('Поздравляю, Вы угадали!!!');
      

    }

  }

}

gameStart()()