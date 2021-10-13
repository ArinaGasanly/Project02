function isNum(userNumber) {
  userNumber = !isNaN(parseFloat(userNumber)) && isFinite(userNumber);
}
function gameStart() {
  const randomNumber = Math.floor((Math.random() * 100) + 1);

  return function repeat() {
    let userNumber = prompt('Введи число!');
    if (userNumber === null) {
      alert('Игра окончена!');

    }
    if (userNumber > randomNumber) {
      alert('Загаданное число меньше');
      return repeat()
    }
    if (userNumber < randomNumber) {
      alert('Загаданное число больше');
      return repeat()
    }
    else if (!isNumber(userNumber)) {
      alert('Вы ввели не число, попробуйте ещё раз!');
      return repeat()
    }
    else {
      alert('Поздравляю, Вы угадали!!!');
      

    }

  }

}

gameStart()()