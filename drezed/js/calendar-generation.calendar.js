//  ---------------------------------------Логіка---------------------------------
var today = new Date(); // Створення обєкта Date з поточним датою та чосом
// Методи отримання компонентів дати
var day = today.getDay(); // Визначення поточного дня тижня
var month = today.getMonth(); // Визначення поточного місяця
var year = today.getFullYear(); // Визначення поточного року
var date = today.getDate(); // Визначення поточного числа

// Масив з днями тижня
var dayNames = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
// Масив з назвами місяців
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var lastDate = new Date(year, month + 1, 0).getDate(); //Останє число місяця
var firstDay = new Date(year, month, 0).getDay(); // День тижня на перщого числа місяця;
var lastDay = new Date(year, month, lastDate).getDay(); // День тижня останього дня місяця
var prevMonth = month - 1;
var nextMonth = month + 1;

var prevMonthLastDate = new Date(year, month, 0).getDate(); // останє число попереднього місяця
var nextMonthFirstDate = 1; // перше число попереднього місяця


// ----------------------------------------Створення календаря--------------------
var pageWrapper = document.querySelector('.c-wrapper');
var navigation = document.querySelector('.c-nav');
var dayList = document.querySelector('.c-days')
var dateList = document.querySelector('.c-dates');

// Наповнення блоку навігації
var monthTitel = document.createElement('div');
monthTitel.classList.add('c-nav__month');
monthTitel.innerHTML = monthNames[month];
navigation.appendChild(monthTitel);

var yearCell = document.createElement('div');
yearCell.classList.add('c-nav__year');
yearCell.innerHTML = year;
navigation.appendChild(yearCell);

// Генерація днів тижня

for (var i = 0; i < dayNames.length; i++) {
    var dayCell = document.createElement('div');
    dayCell.classList.add('c-days__item');
    dayCell.innerHTML = dayNames[i];
    dayList.appendChild(dayCell);
}

// Генерація сітки

for (var i = 1; i <= lastDate; i++) {
    if (i != date) { // Як можна вкоротити цю конструкцію if? щоб
        // позбутися дублювання кода
        var dateCell = document.createElement('div');
        dateCell.classList.add('c-dates__item');
        dateList.appendChild(dateCell);

        var dateText = document.createElement('span');
        dateText.classList.add('c-dates__text');
        dateText.innerHTML = i;
        dateCell.appendChild(dateText);
    } else {
        var dateCell = document.createElement('div');
        dateCell.classList.add('c-dates__item', 'today');
        dateList.appendChild(dateCell);

        var dateText = document.createElement('span');
        dateText.classList.add('c-dates__text');
        dateText.innerHTML = i;
        dateCell.appendChild(dateText);
    }
}

// додаткові клітки спочатку місяця
if (firstDay != 0) {
    for (var i = 0; i < firstDay; i++) {
        var dateCell = document.createElement('div');
        dateCell.classList.add('c-dates__item', 'prev-date');
        dateList.insertBefore(dateCell, dateList.firstChild);
        var dateText = document.createElement('span');
        dateText.classList.add('c-dates__text');
        dateText.innerHTML = prevMonthLastDate - i;
        dateCell.appendChild(dateText);
    }
}
// Проблема з першим днем місяця "Неділя"
// додаткові клітинки вкінці місяця

if (lastDay != 0) {
    for (var i = lastDay; i < 7; i++) {
        var dateCell = document.createElement('div');
        dateCell.classList.add('c-dates__item', 'prev-date');
        dateList.appendChild(dateCell);
        var dateText = document.createElement('span');
        dateText.classList.add('c-dates__text');
        dateText.innerHTML = nextMonthFirstDate++;
        dateCell.appendChild(dateText);
    }
}


// Events block code

// End events block code
