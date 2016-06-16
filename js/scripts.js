var search = document.querySelector(".search");
var link = search.querySelector(".btn.btn-brown");
var popup = search.querySelector(".modale-content");
				
var form = popup.querySelector("form");
var begin = popup.querySelector("[name='begin']");

var adults = popup.querySelector(".number-input.adults");
var adults_text = adults.querySelector("[name='adults']");
var adults_plus = adults.querySelector(".form-btn.icon-plus");
var adults_minus = adults.querySelector(".form-btn.icon-minus");

var childs =  popup.querySelector(".number-input.childs");
var childs_text = childs.querySelector("[name='childs']");
var childs_plus = childs.querySelector(".form-btn.icon-plus");
var childs_minus  = childs.querySelector(".form-btn.icon-minus");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.toggle("modale-content-show");
	begin.focus();
});

form.addEventListener("submit", function(event) {
	if (!(begin.value && end.value)) {
		event.preventDefault();
		}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode == 27) {
		if (popup.classList.contains("modale-content-show")) {
			popup.classList.remove("modale-content-show");
		}
	}
});

adults_plus.addEventListener("click", function(event){
	if(adults_text.value < 20){
		adults_text.value = parseInt(adults_text.value) + 1;
	}
});

adults_minus.addEventListener("click", function(event){
	if(adults_text.value != 0){
		adults_text.value = parseInt(adults_text.value) - 1;
	}
});

childs_plus.addEventListener("click", function(event){
	if(childs_text.value < 20){
		childs_text.value = parseInt(childs_text.value) + 1;
	}
});

childs_minus.addEventListener("click", function(event){
	if(childs_text.value != 0){
		childs_text.value = parseInt(childs_text.value) - 1;
	}
});
