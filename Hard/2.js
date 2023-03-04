/*

Создайте функцию, которая принимает в качестве аргументов массив строк,
а возвращает первый самый длинный элемент массива.
Если входной массив пуст, функция возвращает null.
Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.

Для начала пропиши аргументы функции.  

Пример: [ 'one', 'two', 'three' ] => 'three'

*/

const longestString = (arr) => {
	let string;
	if (arr.length === 0) {
		string = null;
	} else {
		string = arr[0];
		arr.map((item) => {
			if (item.length > string.length) {
				string = item;
			}
		});
	}
	return string;
};

module.exports = longestString;
