/*

Создайте функцию, которая принимает в качестве аргумента строку и выводит каждый символ этой строки в консоль.

*/

const logEachLetter = (str) => {
	str.split("").map((item) => console.log(item));
};

module.exports = logEachLetter;
