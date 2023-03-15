/*
Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

Можем ли мы сделать так?
*/
function Obj(prop) {
    this.prop = prop;
}

Obj.prototype = {};

let obj = new Obj('test');
let obj2 = new obj.constructor('test2');
console.log(obj.prop);
console.log(obj2.prop);
/*Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно.*/