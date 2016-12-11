//This API is for the google map attached rom w3schools.com
//API key is taken from G-suit for abhishek-agrawal.in
//API key is in the JaveScript Source in the html file
function myMap() {
	var mapCanvas = document.getElementById("map");
	var mapOptions = {
		center: new google.maps.LatLng(25.5357523, 84.8510653), zoom: 12
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);
}
//These are for the social links attached
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
