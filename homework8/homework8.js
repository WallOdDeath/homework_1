//2. Не выполняя кода, ответить, что выведет браузер и почему:
if (!("a" in window)) {
    var a = 1;
}
alert(a); //undefined, тк не выполняется условие

var b = function a(x) {
    x && a(--x);
};
alert(a); // function a(x) { x && a(--x);}; 

function a(x) { 
    return x * 2;
}
var a;
alert(a); //выведет функцию а

function b(x, y, a) { 
    arguments[2] = 10;
    alert(a); //выведет 10, тк 2му элементу массива аргументс присваивается значение 10
}
b(1, 2, 3);

function a() {
    alert(this); //object window, тк this здесь это окно
}
a.call(null);