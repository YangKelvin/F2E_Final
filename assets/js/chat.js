$(document).ready(function(){
	var config = {
	  apiKey: "AIzaSyAssYcYt8dOKmJpEXypEQ_XkYUqz1P1LHY",
	  authDomain: "f2e-final-9cab2.firebaseapp.com",
	  databaseURL: "https://f2e-final-9cab2.firebaseio.com",
	  projectId: "f2e-final-9cab2",
	  storageBucket: "f2e-final-9cab2.appspot.com",
	  messagingSenderId: "83668428066"
	};
	firebase.initializeApp(config);
	var dbRef = firebase.database().ref();
	var $messageField = $('#messageInput');
	var $nameField = $('#nameInput');
	var $messageList = $('#example-messages');
	
	$messageField.keypress(function (e) {
		if (e.keyCode == 13) 
		{
			var username = $nameField.val();
			var message = $messageField.val();
			console.log(username);
			console.log(message);
			dbRef.push({name:username, text:message});
			$messageField.val('');
		}
    });
  
	dbRef.limitToLast(10).on('child_added', function (snapshot) {
		var data = snapshot.val();
		var username = data.name || "anonymous";
		var message = data.text;
		var $messageElement = $("<li>");
		var $nameElement = $("<strong class='username-chat'></strong>");	
		$nameElement.text(username);
		$messageElement.text(message).prepend($nameElement);

		$messageList.append($messageElement)
		$messageList[0].scrollTop = $messageList[0].scrollHeight;
    });
});	

function myMap() {
	var mapOptions = {
		center: new google.maps.LatLng(25.044140, 121.533838),
		zoom: 18,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}