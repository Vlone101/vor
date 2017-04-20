$(function(){
	var history = [];

	var timerId = setInterval(function() {
		var messagesArr = JSON.parse(localStorage.getItem('messages'));
		for (var i = 0; i < messagesArr.length; i++) {
			if (JSON.stringify(messagesArr[i]) === JSON.stringify(history[i])){
			} else {
				history[i] = messagesArr[i];
				showMessage(history[i]);
				$(".m-main-stream--history").scrollTop(99999999);
			}
		}
	}, 200);

	setTimeout(function() {
		clearInterval(timerId);
		alert( 'стоп' );
	}, 50000);


	function showMessage(message) {
		var container = $('.m-main-stream-history-w');
		var element = '<div class="m-main-stream--mess-stack">' +
			'<div class="m-main-mess-stack--photo">' + 
				'<div class="m-main-mess-stack--photo_small fl_l">' +
					'<a href="#">' +
						'<img src="img/m-profile-img.png" alt="user-photo"">'+
					'</a></div></div>'+
		'<div class="m-main-mess-stack--content">' +
			'<div class="m-main-mess-stack--info">' +
				'<div class="m-main-mess-stack--name">' +
					'<a href="#" class="m-main-mess-stack--lnk" title-target="#">' + message.name + '</a>' +
					'<span class="m-main-mess-stack--time">' +
						'<a href="#" class="m-main-mess-stack-time--lnk">'+ ' ' + message.time +'</a>' +
					'</span></div></div>' +
		'<ul class="m-main-mess-stack--message">' +
			'<li class="m-main-message_number">' +
				'<div class="m-main-message--text">' + message.text + '</div></li></ul>' +
		'</div>' +
		'</div>';
		container.append(element);
	}
});