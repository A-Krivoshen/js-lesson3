"use strict";

var positions = [
  'Отвертка ультразвуковая WHO-D',
  'Ховерборд Mattel 2016',
  'Нейтрализатор FLASH black edition',
  'Меч световой FORCE (синий луч)',
  'Машина времени DeLorean',
  'Репликатор домашний STAR-94',
  'Лингвенсор 000-17',
  'Целеуказатель электронный WAY-Y'
];

var arrayLength = positions.length;

console.log('Список наименований');

for (var i = 0; i < arrayLength;i++){
  console.log(i+1 + ' ' + positions[i]);
}

"use strict";



var positions = [

  'Отвертка ультразвуковая WHO-D',

  'Ховерборд Mattel 2016',

  'Нейтрализатор FLASH black edition',

  'Меч световой FORCE (синий луч)',

  'Машина времени DeLorean',

  'Репликатор домашний STAR-94',

  'Лингвенсор 000-17',

  'Целеуказатель электронный WAY-Y'

];

/2

positions.push('Экзоскелет Trooper-111', 'Нейроинтерфейс игровой SEGUN', 'Семена дерева Эйва');

var arrayLength = positions.length;



console.log('Окончательный список наименований');



for (var i = 0; i < arrayLength; i++){

  console.log(i+1 + ' ' + positions[i]);

}

/3

"use strict";

var price;


try {
    if (typeof(price) !== 'number') {
      throw " не является числом";
    }
    console.log('Цена товара введена корректно');
} catch (err) {
    console.log('Вы допустили ошибку: ' + price + err);
}
