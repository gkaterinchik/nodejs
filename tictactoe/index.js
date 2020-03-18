const readlineSync = require('readline-sync');

function startGame() {
  const xBorder = 3;
  const yBorder = 3;
  const countForWin = 3;


  gameField = [];
  for (let i = 0; i < xBorder; i++) {
    gameField.push([]);

    for (let j = 0; j < yBorder; j++) {
      gameField[i].push('');
    }
  }

  currentStep = 'X'; // Текущий игрок

  gameStarted = true;
  console.log('Игра началась');

  while (gameStarted === true) {
    console.log(`Ход: "${currentStep}"`);

    step();
  }
}

function step() {
  // const countForWin = 3;

  const coordinates = readlineSync.question('введите координаты хода: в формате xy ' + '\n');
  const coordinateArr = coordinates.split('');
  if (coordinateArr.length === 2) {
    const x = Math.abs(parseInt(coordinates[0]));
    const y = Math.abs(parseInt(coordinates[1]));

    switch (true) {
      case isNaN(x) || isNaN(y): console.log('Неверные координаты');
        break;

      case (x > gameField.length - 1 || y > gameField[0].length - 1): console.log('введенные координаты выходят за пределы игрового поля ');
        break;

      case (gameField[x][y] !== ''): console.log('ячейка занята');
        break;

      default: gameField[x][y] = currentStep;
        currentStep = currentStep === 'X' ? 'O' : 'X'; // Если текущий игрок Х, то меняем на 0
        switch (checkWin()) {
          case -1:
            console.log('Ничья');
            gameStarted = false;
            break;

          case 1:
            console.log('Выиграли X');
            gameStarted = false;
            break;

          case 2:
            console.log('Выиграли O');
            gameStarted = false;
            break;
          default:
        }
        break;
    }
  }

  render();
}


function checkWin() {
  const countForWin = 3;
  let emptyCell = false;


  for (let i = 0; i < gameField.length; i++) {
    for (let j = 0; j < gameField[i].length; j++) {
      const player = gameField[i][j];
      if (player) { // если клетка не пустая то проверяем от нее на победу
        let count; let k; let
          l;

        if (gameField.length - i >= countForWin) {
          // Проверяем линии по вертикали
          count = 1;
          k = i + 1;
          while (k < gameField.length && count < countForWin && gameField[k][j] === player) {
            count++;
            k++;
          }

          if (count === countForWin) {
            return player === 'X' ? 1 : 2;
          }
        }
        if (gameField[i].length - j >= countForWin) {
          // Проверяем горизонталь
          count = 1;
          k = j + 1;
          while (k < gameField[i].length && count < countForWin && gameField[i][k] === player) {
            count++;
            k++;
          }

          if (count === countForWin) {
            return player === 'X' ? 1 : 2;
          }
        }
        if ((gameField.length - i >= countForWin) && (gameField[i].length - j >= countForWin)) {
          // Проверяем первую диагональ
          count = 1;
          k = i + 1;
          l = j + 1;
          while (k < gameField.length && l < gameField[k].length && count < countForWin && gameField[k][l] === player) {
            count++;
            k++;
            l++;
          }

          if (count === countForWin) {
            return player === 'X' ? 1 : 2;
          }
        }
        if ((gameField.length - i >= countForWin) && (gameField[i].length - j >= 0)) {
          // Проверяем вторую диагональ
          count = 1;
          k = i + 1;
          l = j - 1;
          while (k < gameField.length && l > -1 && count < countForWin && gameField[k][l] === player) {
            count++;
            k++;
            l--;
          }

          if (count === countForWin) {
            return player === 'X' ? 1 : 2;
          }
        }
      } else {
        emptyCell = true;
      }
    }
  }

  if (!emptyCell) {
    return -1;
  }
}
function render() {
  console.log(gameField[0]);
  console.log(gameField[1]);
  console.log(gameField[2]);
}
startGame();
