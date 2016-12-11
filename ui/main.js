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
//Link of Home in hemberger menu
$(document).ready(function(){
    $('#home-click').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
//Link of Skills in hemberger menu
$(document).ready(function(){
    $('#skills-click').click(function(){ 
        $("html, body").animate({ scrollTop: 600 }, 600); 
        return false; 
    }); 
});
//Link of Education in hemberger menu
$(document).ready(function(){
    $('#education-click').click(function(){ 
        $("html, body").animate({ scrollTop: 1200 }, 600); 
        return false; 
    }); 
});
//Link of Projects in hemberger menu
$(document).ready(function(){
    $('#projects-click').click(function(){
        $("html, body").animate({ scrollTop: 1800 }, 600); 
        return false; 
    }); 
});
//Link of Contacts in hemberger menu
$(document).ready(function(){
    $('#contacts-click').click(function(){
        $("html, body").animate({ scrollTop: 2400 }, 600); 
        return false; 
    }); 
});
