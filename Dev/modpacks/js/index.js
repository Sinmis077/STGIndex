function Navig() {
	var nav = document.getElementById("mobnav");
	if (nav.className === "active" ) {
		nav.className += " menu"
	}
	else {
		nav.className = "active"
	}
}