function navToggle() {
	document.getElementById('navUl').classList.toggle("_active");
	document.getElementById('html').classList.toggle("overflow-y-hidden");
}

function closeBurger() {
	document.getElementById('navLi').classList.toggle("_active");
	document.getElementById('navUl').classList.remove("_active");
	document.getElementById('html').classList.remove("overflow-y-hidden");
}
