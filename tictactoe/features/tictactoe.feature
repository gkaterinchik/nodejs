#language: ru
Функционал: Крестики нолики

Сценарий: 1+1
        Дано Я начинаю с 1
        Если добавляю 1
        То получаю в ответ 2
        Дано Я начинаю с 10
        Если добавляю 5
        То получаю в ответ 15



Сценарий: Ход игрока
        Дано пустое поле
        И ходит игрок 1
        Если игрок ходит в клетку 01
        То поле становится "100|000|000"
        Если игрок 2 ходит в клетку 11
        То поле становится "100|020|000"
        Если игрок 1 ходит в клетку 20
        То поле становится "101|020|000"

  Сценарий: Ход игрока в заполненную клетку
        Дано поле "100|200|102"
        И ходит игрок 1
        Если игрок ходит в клетку 1, 2
        То возвращается ошибка
        И поле становится "100|200|102"

        Если игрок ходит в клетку 2, 2
        То поле становится "100|210|102"

    Сценарий: определение победителя по вертикали
        Дано поле "102|120|002"
        И ходит игрок 1
        Если игрок ходит в клетку 1, 3
        То поле становится "102|120|102"
        И победил игрок 1

        Сценарий: определение победителя по горизонтали
        Дано поле "110|020|002"
        И ходит игрок 1
        Если игрок ходит в клетку 3, 1
        То поле становится "111|020|002"
        И победил игрок 1

         Сценарий: определение победителя по диагонали
        Дано поле "121|200|102"
        И ходит игрок 1
        Если игрок ходит в клетку 3, 1
        То поле становится "121|210|102"
        И победил игрок 1 