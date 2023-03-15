/*Напишите интерфейс для создания списка.

Для каждого пункта:

Запрашивайте содержимое пункта у пользователя с помощью prompt.
Создавайте элемент <li> и добавляйте его к <ul>.
Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
Все элементы должны создаваться динамически.

Если пользователь вводит HTML-теги, они должны обрабатываться как текст.*/
function createList() {
    let list = document.createElement('ul');
    document.body.append(list);
    
    while(true) {
        let text = prompt('li?');

        if (!text) break;

        let item = document.createElement('li');
        item.textContent = text;

        list.append(item);
    }
}