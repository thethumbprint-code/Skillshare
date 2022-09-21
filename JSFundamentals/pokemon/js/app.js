$(document).ready(function() {

	$('#get-pokemon-button').on('click', function() {

		$.get('https://pokeapi.co/api/v2/pokemon/', function(data, status) {
			console.log(data.results);
//create a string
			var string = "";

//open a table tag
			string += "<table class='table'>";

//this is starting the loop. .each (you can find it on JQuery.com) is how you make a loop 
			$.each(data.results, function(index, item) {

//data.results is from the console showing pokemon's API
//value == item. item.url and item.name is the object breakdowns we're looking for according to pokemon's API names
				string += "<tr><td><a href='"+item.url+"'>"+item.name+"</td><td><button class='hide-button btn btn-primary'>Hide</button></a></td></tr>";
			});

			string += "</table>";

			$('#poke-list').html(string);

//checking if there's a status (named earlier in the code) it can hide 
			if(status) {
				$('.hide-button').on('click', function() {
					$(this).parent().parent().hide();
				});
			}
		});
	});

});