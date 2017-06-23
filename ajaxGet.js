
function request(name,id){
  var imgsrc = 'pokemon/'+name+'.png';
  $("#image2").html('<img src="'+imgsrc+'" />');
  $("#evoheader").html('Evolution Box');
  $("#stats").html('<table><thead><tr><th>Attack</th><th>Defence</th><th>Speed</th></tr><tr><td id="attack"></td><td id="defense"></td><td id="speed"></td></tr></thead></table>');
  var settings = {
    "async": true,
    "crossDomain": true,
    "method": "GET",
    "headers": {}
  }
  
  settings["url"]='http://pokeapi.co/api/v2/pokemon/'+name;

  $.ajax(settings).done(function (response) {
    $("#attack").html(response.stats[4].base_stat);
    $("#defense").html(response.stats[3].base_stat);
    $("#speed").html(response.stats[0].base_stat);
    $("#name").html(name+"'s stats");
  });


  settings["url"]='http://pokeapi.co/api/v2/evolution-chain/'+id;

  $.ajax(settings).done(function (response) {
	$("#evo1").html(response.chain.species.name);
    $("#evo2").html(response.chain.evolves_to[0].species.name);
	$("#evo3").html(response.chain.evolves_to[0].evolves_to[0].species.name);
	$(".arrow").html('<img class="evo"src="pokemon/arrow.png" />');
	
  });
}