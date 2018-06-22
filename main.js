var menu = document.querySelector(".menu");
var main = document.querySelector("body");
var drawer = document.querySelector(".navbar");

menu.addEventListener("click", function (e) {
	drawer.classList.toggle("open");
	e.stopPropagation();
});
main.addEventListener("click", function () {
	drawer.classList.remove("open");
});


var showText = function (target, message, index, interval) {
	if (index < message.length) {

		$(target).append(message[index++]);

		setTimeout(function () {
			showText(target, message, index, interval);
		}, interval);

	}
}

$(function () {

	showText(".main-name1", "Katya Horton.", 0, 120);

});

$(".main-name2").delay(1200).fadeIn(4000);

