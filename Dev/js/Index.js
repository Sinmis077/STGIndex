/* function ChangeCSS(sheet) {
	document.getElementById('stylesheetid').setAttribute('href', sheet);
	if (sheet == 'dark.css') {
		document.getElementById('TCB').setAttribute('name', "Dark Theme");
		document.getElementById('TCB').setAttribute('onclick', 'ChangeCSS("css/light.css")')
	}
	else {
		document.getElementById('TCB').setAttribute('name', 'Light Theme');
		document.getElementById('TCB').setAttribute('onclick', 'ChangeCSS("css/dark.css")');
	}
} */
function myNav() {
        var nav = document.getElementById("myTopnav");
        if (nav.className === "topnav") {
            nav.className += " responsive";
        } else {
            nav.className = "topnav";
        }

}