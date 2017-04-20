document.addEventListener("DOMContentLoaded", function(event) {
	var overlay = document.querySelector('.t-main__overlay');
	var openTaskbar = document.querySelectorAll('.t-task_card__button_menu');
	var buttonSave = document.querySelector('.t-taskbar__btn_save');
	var buttonUndo = document.querySelector('.t-taskbar__btn_undo');
	
	openTaskbar.forEach(function (item, i) {
		openTaskbar[i].addEventListener('click', showModal);
	});

	function showModal() {
		overlay.classList.toggle('t-main__overlay_display');
		buttonSave.addEventListener('click', hideModal);
		buttonUndo.addEventListener('click', hideModal);
	}

	function hideModal() {
		overlay.classList.toggle('t-main__overlay_display');
	}

});