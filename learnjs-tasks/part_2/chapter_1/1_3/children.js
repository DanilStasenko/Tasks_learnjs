/*
<html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>
*/

//элемент <div>?
let div = document.body.firstElementChild;
//<ul>?
let ul = document.body.children[1];
//второй <li> (с именем Пит)?
let li = document.body.children[1].children[1];