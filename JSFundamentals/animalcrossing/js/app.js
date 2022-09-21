$(document).ready(function() {

	$('#get-pokemon-button').on('click', function() {

		$.get('https://acnhapi.com/v1/villagers/', function(data, status) {

//create a string
			var string = "";

//open a table tag
			string += "<table class='table'>";

//this is starting the loop. .each (you can find it on JQuery.com) is how you make a loop 
			$.each(data, function(index, item) {

//data.results is from the console showing animalcrossing's API
//value == item. item.url and item.name is the object breakdowns we're looking for according to pokemon's API names
				string += "<tr><td><a href='"+item.image_uri+"'>"+item.name["name-USen"]+"</td><td><button class='hide-button btn btn-primary'>Hide</button></a></td></tr>";
			});
			console.log(data);
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
