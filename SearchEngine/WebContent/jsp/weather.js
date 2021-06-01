/**
 * 
 */

$(document).ready(function() {
	$.ajax({
		//q = 지역 , 
		url: 'http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid={2ee3665374e4d7607308804ed94e7e4a}&units=metric',
		dataType: 'json',
		type: 'GET',
		success: function(data) {
			var $Icon = (data.weather[0].icon);
			var $Temp = Math.floor(data.main.temp) + 'º';
			var $city = data.name;
			
			$('.CurrIcon').append('http://openweathermap.org/img/wn' + $Icon + '@2x.png');
			$('.CurrTemp').prepend($Temp);
			$('.City').append($city);
		}
	})
});