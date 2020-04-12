function myNav() {
        var nav = document.getElementById("myTopnav");
		var header = document.getElementById("headerClass");
		var active = document.getElementById("activea");
        if (nav.className === "topnav") {
            nav.className += " responsive";
			header.className += " responsive";
			active.className += " responsive";
        } else {
            nav.className = "topnav";
			header.className = "headerclass";
			active.className += "active"
		}

}