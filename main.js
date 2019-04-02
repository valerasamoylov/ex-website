
// initial hover on submenu
$(document).ready(function(){
	$('.dropdown-menu a.products').on("mouseenter", function(e){
		$(this).next('ul').toggle();
		e.stopPropagation();
		e.preventDefault();
	});
});


// initial map
var map, infoWindow;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -34.397, lng: 150.644},
		zoom: 16
	});
	infoWindow = new google.maps.InfoWindow;

	// Try HTML5 geolocation.
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};

			infoWindow.setPosition(pos);
			infoWindow.setContent('Location found.');
			infoWindow.open(map);
			map.setCenter(pos);
		}, function() {
			handleLocationError(true, infoWindow, map.getCenter());
		});
	} else {
		// Browser doesn't support Geolocation
		handleLocationError(false, infoWindow, map.getCenter());
	}
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
												'Error: The Geolocation service failed.' :
												'Error: Your browser doesn\'t support geolocation.');
	infoWindow.open(map);
}



// include contact form
$(document).ready(function() {
	$(".submit").click(function(event){
		
		

		var email = $('#input-email').val()
		var name = $('#input-name').val()
		var message = $('#main-message').val()
		

		if(email.length>5 && email.includes('@') && email.includes('.')) {

		} else {
			event.preventDefault()
			alert('please, input your email')
		}

		if(name.length>5)  {
	
		} else {
			event.preventDefault()
			alert('please, input your name')
		}

		if (message.length>10) {

		} else {
			event.preventDefault()
			alert('please, input your message')
		}
	})
})
