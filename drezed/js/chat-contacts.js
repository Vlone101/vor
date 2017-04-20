$(document).ready(function(){

/*------------------------------------------------------
	Функції для роботи з списком контактів
	
	Контакт має наступну структуру:
	contactID	(number)	- Ідентифікатор контакту
	contactStatus	(boolean)	- Юзер онлайн або офлайн
	nicName		(str)		- Нік Юзера
	userName	(str)		- Імя Юзера
	lastUseName	(str)		- Фамілія Юзера
	*	userStatus	(str)	- Статус юзера (наприклад "Не турбувати")
	*	userEmail	(str)	- необовязково
	*	userPhone	(str)	- необовязково
	*	userPosition(str)	- посада (наприклад ПродактОунер)
	userLastActivity(time)	- час останньої активності (час останього діалогу між вами і юзером)
------------------------------------------------------*/
/*
	Функція, що зчитує список контактів з localStorage
*/
function getlocalContacts(){
	var localContactList = localStorage.getItem(JSON.parse(localContactList));
	return localContactList;
}
/*
	Функція, що зберігає список контактів до localStorage
*/
function saveLocalContctList(contactList){
	//йдемо циклом по contactList та оновлюємо localStorage
	localStorage.setItem(' " ' + contactList[i].contactID + ' " ',);
????????	
}

/*
	Функція, що дописує нові елементи з списку контактів в ДОМ сторінки
*/
function addToContactList(newContactList){
	var contactList = $(.m-contacts__list);
}

/*
	Функція, що видаляє елементи з списку контактів з ДОМ сторінки
*/






/*
	Функція, що сортує користувачів за активністю
	(повертає масив Ідентифікаторів користувачів відсортованих в результаті
	порівняння (двох)? останніх дат(часу) переписки з ними)
*/




});//end (document).ready