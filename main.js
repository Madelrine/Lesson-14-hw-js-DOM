//создаем переменные
let x = prompt('Please enter x = ', 0);
let n = prompt('Please enter pow of x, n = ');

//приводим переменные к инту
try {
    x = parseInt(x);
} catch (e) {
    x = 1;
}
try {
    n = parseInt(n);
} catch (e) {
    n = 1;
}

//функция для записи результата через querySelector в индекс результата
function showResult(result) {
    document.querySelector('#result h2').innerHTML = result;
}

var result = Math.pow(x, n);

var resultString = 'Result of x = ' + x + ' in power of n = ' + n + ' equals ' + result;


showResult(resultString);