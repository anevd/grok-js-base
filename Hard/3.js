/*
Создайте функцию, которая убирает из строки символ "_", 
а следующую за "_" букву делает заглавной

Для начала пропиши аргументы функции.  

Пример: 'web_development' => 'webDevelopment'
*/

const camelCase = (str) => {
	let arr = str.split("");
	arr.map((item, index, arr) => {
		if (item === "_") {
			arr[index + 1] = arr[index + 1].toUpperCase();
			arr.splice(index, 1);
		}
	});
	return arr.join("");
};

module.exports = camelCase;
