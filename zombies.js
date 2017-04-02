$(document).ready(function() {

	var zombies = 9;
	var coconuts = 20;

	zombieCount(zombies);
	coconutCount(coconuts);

	showZombies(zombies);
	showCoconuts(coconuts);

	// Display the zombie-count at the top of the page
	function zombieCount(z) {
		$(".zombie-count").html(function(){
		return "<h1>Zombies: " + z + "</h1>"
		});
	}
	
	// Display the cocnut-count at the top of the page
	function coconutCount(c) {
		$(".coconut-count").html(function(){
		return "<h1>Coconuts: " + c + "</h1>"
		});
	}

	// Show Zombies based on the number of zombies remaining
	function showZombies(z) {
		$(".zombie-container").html("");
		for(i=0; i < z; i++) {
		$(".zombie-container").append("<img src='img/zombie.svg' width='50'>")
		}
	}

	// Show Coconuts based on the number of coconuts remaining
	function showCoconuts(c) {
		$(".coconut-container").html("");
		for(i=0; i < coconuts; i++) {
		$(".coconut-container").append("<img src='img/coconut.svg' width='30'>")
		}
	}

	$(".attack").click(function() {
		// alert("Zombies: " + zombies + "\n" + "Coconuts: " + coconuts);
		chance = Math.random();
		if (chance > .3)  {
			console.log("You hit a zombie!");
			zombies -= 1;
			coconuts -= 1;
			zombieCount(zombies);
			coconutCount(coconuts);
			showZombies(zombies);
			showCoconuts(coconuts);

		} else {
			console.log("You missed the zombies!");
			coconuts -= 1;
			coconutCount(coconuts);
			showCoconuts(coconuts);
		}

	});
}); 
