'use strict';

// Тестовый массив serverAnswer
let serverAnswer = [];
let u1 = {
  id: "u1",
  name: "Иван",
  surname: "Иванов",
  email: "ivan@163.com",
  password: hashCode("u1"),
  status: true,
  ip: "192.168.0.1"
};
let u2 = {
  id: "u2",
  name: "Петр",
  surname: "Петров",
  email: "petr@163.com",
  password: hashCode("u2"),
  status: true,
  ip: "192.168.0.2"
};
let u3 = {
  id: "u380",
  name: "Сергей",
  surname: "Сергеев",
  email: "serg@163.com",
  password: hashCode("u3"),
  status: true,
  ip: "192.168.0.3"
};

serverAnswer.push(u1);
serverAnswer.push(u2);
serverAnswer.push(u3);

// Запись "ответа от сервера" в localStorage
localStorage["serverAnswer"] = JSON.stringify(serverAnswer);

// Вытаскиваем ответ сервера из localStorage и преобразуем в массив
let addressBook = JSON.parse(localStorage["serverAnswer"]);
console.log(addressBook);

// Подсказка
function blank(blankField){
  // let form = document.querySelector(".enter__form");
  let hint = document.createElement("p");
  hint.placeholder = "Заполните это поле";
  // blankField.appendChild(hint);
};

// Вычисление хеша пароля
function hashCode(str) {
  return str.split('').reduce((prevHash, currVal) =>
  ((prevHash << 5) - prevHash) + currVal.charCodeAt(0), 0);
}

document.addEventListener("DOMContentLoaded", ready);

function ready() {
    console.log("скрипт подключен");

  // Отображение текущего IP-адреса пользователя
  let myIp = document.createElement("p");
  myIp.innerHTML = "Ваш IP-адрес: " + IP;
  myIp.style.textAlign = "center";

  let enter = document.querySelector(".enter");
  enter.appendChild(myIp);

  // Запуск регистрации
  let submit = document.querySelector(".enter__submit");
  submit.addEventListener("click", check);

  function check(){
    let record = document.querySelectorAll(".enter__control");
    record.forEach(function(field, i, record){
      if (field.value.length == 0) {
        blank(field);
        return;
      }
    });
  }
    if (record[3].value != record[4].value) {console.log("pass not confirm");};
    let user = {
      name: record[0].value,
      surname: record[1].value,
      email: record[2].value,
      password: hashCode(record[3].value),
      ip: IP
    };
    console.log(user.email);


    // Проверка на совпадение адреса почты
    serverAnswer.forEach(function(regUser, i, serverAnswer){
      if (regUser.email == user.email) {console.log("Такой пользователь уже зарегистрирован");};
      if (i + 1 == serverAnswer.length) {user.id = "u" + (+regUser.id.slice(1) + 1)};
      console.log(user.id);
    });
    serverAnswer.push(user);
    console.log(serverAnswer);
    localStorage["addressBook"] = JSON.stringify(serverAnswer);

//Валидация email
let validEmail = function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

let logIn = document.querySelector('.enter__submit_second');
let lossPass = document.querySelector('.enter__submit');

// проверка зарегистрированного пользователя при нажатии на кнопку
// logIn.addEventListener('click', function(e){;
// 	e.preventDefault();

	// let email = document.querySelector('#email').value;
	// let password = document.querySelector('#password').value;
	// let flag = 0;
	// let correctData = '';
  //
	// // проверка корректности email
	// if (validEmail(email) == true){
  //
	// 	// поиск зарегисрированных пользователей
	// 	for (let key in addressBook) {
	// 		if (addressBook[key].email === email && addressBook[key].password == password){
	// 			correctData = addressBook[key];
	// 			flag = true;
	// 		}
	// 	}
	// 	// вывод
	// 	if (flag === true){
	// 		alert('Приветствуем Вас ' + correctData.name + ' Вы успешно вошли в программу');
	// 	} else {
	// 	alert('Не корректно введны email или пароль');
	// }
	// console.log('email:', email, ' password:', password);
	// } else {
	// 	alert('Не корректно введен email');
	// }
  //
  // // })
  //
  // lossPass.addEventListener('click', function(){
	//   prompt('Введите ваш email для востановления паролья.');
  // })

}
