$(function(){
	//user data for test
	var user = [
	{												
		id: '01',						
		name: 'Andrei',
		surname: 'Pypkin',
		email: 'andrei@mail.com'
	}];
	// stroage for messages
	var messagesData = [];				
	localStorage.setItem('user', JSON.stringify(user));
	var currentUser = JSON.parse(localStorage.getItem('user'));
	// function for getting time
	function getTime() {
		var now = new Date();
		var hours = now.getHours();
		var min = now.getMinutes();
		var prefix;
		if (hours > 12){
			hours -= 12;
			prefix = "PM";
		} else {prefix = "AM"};
		if (min < 10) {
			min = '0' + min
		} else {min = min;}
		var result = hours + ':' + min + ' ' + prefix;
		return result;
	}

	// press Enter 
	$('#message-input').keydown(function(e) {
		if (e.which == 13){
			e.preventDefault();
			var time = getTime();

			var message = $('#message-input').val();
			messagesData.push({
				name: user[0].name,
				time: time,
				text: message
			});
			console.log(messagesData);
			localStorage.setItem('messages', JSON.stringify(messagesData));
			$('#message-input').val('');
        }
	});
});