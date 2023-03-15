/*
Таблицу с id="age-table".
Все элементы label внутри этой таблицы (их три).
Первый td в этой таблице (со словом «Age»).
Форму form с именем name="search".
Первый input в этой форме.
Последний input в этой форме.
*/

let table = document.getElementById('age-table');

let labels = document.querySelectorAll('#age-table label');

let firstTd = document.querySelector('td');

let form = document.querySelector('form[name="search"]');

let firstInput = form.querySelector('input');

let inputs = form.querySelectorAll('input');
let lastInputs = inputs[inputs.length - 1];