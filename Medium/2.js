/*

Создайте функцию, которая возвращает массив из 10 случайных целых чисел от 0 до 10.

Пример: () => [ 0, 1, 2, 2, 7, 4, 3, 2, 6, 3 ]

*/

const randomArr = () => {
	let arr = [];
	for (let i = 1; i <= 10; i++) {
		let random = Math.floor(Math.random() * 10 + 1);
		arr.push(random);
	}
	return arr;
};

module.exports = randomArr;
