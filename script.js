let number = prompt('Угадай число от 1 до 100', '');

function guessNumber() {
  if (number > 100)
    console.log('Загаданное число меньше');

  if (number < 1)
    console.log('Загаданное число больше');

  if (number == 77)
    console.log('Поздравляю, Вы угадали!!!');


  function isNumber() {
    let sayNumber = confirm('Введи число!');
    return (typeof number != number || typeof false != number);

  }
  isNumber()
  console.log('Игра окончена');


}

guessNumber(77)