const defineSupportCode = require('cucumber').defineSupportCode;


defineSupportCode(function({ Given, Then, When }) {
  let answer = 0;

  
  Given('Я начинаю с {int}', function (input) {
    answer = input;
  });

  When('добавляю {int}', function (input) {
    answer = answer + input;
  });
  Then('получаю в ответ {int}', function (input) {
   answer;
  });
});
