$(document).ready(function() {

	var zombies = 9;
	var coconuts = 20;

	var originalState = document.body.innerHTML;	

	zombieCount(zombies);
	coconutCount(coconuts);

	showZombies(zombies);
	showCoconuts(coconuts);

	function reset() {
		zombies = 9;
		coconuts = 20;
		zombieCount(zombies);
		coconutCount(coconuts);
		showZombies(zombies);
		showCoconuts(coconuts);
	}

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

	function youWin() {
		alert("You Win!!!");
		reset();
	}

	function youLose() {
		alert("You Lose!!!")
		reset();
	}

	$(".attack").click(function() {
		// alert("Zombies: " + zombies + "\n" + "Coconuts: " + coconuts);
		chance = Math.random();
		if (chance > .4)  {
			console.log("You hit a zombie!");
			zombies -= 1;
			coconuts -= 1;
			zombieCount(zombies);
			coconutCount(coconuts);
			showZombies(zombies);
			showCoconuts(coconuts);
			$(".messages").append("<p>You hit a zombie!</p>");
			$(".messages").find("p").first().remove();
			if(zombies == 0) {
				youWin();
			}

		} else {
			console.log("You missed the zombies!");
			coconuts -= 1;
			coconutCount(coconuts);
			showCoconuts(coconuts);
			$(".messages").append("<p>You missed the zombies!</p>");
			$(".messages").find("p").first().remove();
			if(coconuts == 0) {
				youLose();
			}
		}



	});
}); 
