function myMap() {
	var mapCanvas = document.getElementById("map");
	var mapOptions = {
		center: new google.maps.LatLng(25.5357523, 84.8510653), zoom: 12
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);
}