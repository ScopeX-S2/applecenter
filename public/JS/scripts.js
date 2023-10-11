const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

nextBtnFirst.addEventListener("click", function (event) {
	event.preventDefault();
	slidePage.style.marginLeft = "-25%";
	bullet[current - 1].classList.add("active");
	progressCheck[current - 1].classList.add("active");
	progressText[current - 1].classList.add("active");
	current += 1;
});
nextBtnSec.addEventListener("click", function (event) {
	event.preventDefault();
	slidePage.style.marginLeft = "-50%";
	bullet[current - 1].classList.add("active");
	progressCheck[current - 1].classList.add("active");
	progressText[current - 1].classList.add("active");
	current += 1;
});
submitBtn.addEventListener("click", function () {
	bullet[current - 1].classList.add("active");
	progressCheck[current - 1].classList.add("active");
	progressText[current - 1].classList.add("active");
	current += 1;
});

prevBtnSec.addEventListener("click", function (event) {
	event.preventDefault();
	slidePage.style.marginLeft = "0%";
	bullet[current - 2].classList.remove("active");
	progressCheck[current - 2].classList.remove("active");
	progressText[current - 2].classList.remove("active");
	current -= 1;
});
prevBtnFourth.addEventListener("click", function (event) {
	event.preventDefault();
	slidePage.style.marginLeft = "-25%";
	bullet[current - 2].classList.remove("active");
	progressCheck[current - 2].classList.remove("active");
	progressText[current - 2].classList.remove("active");
	current -= 1;

});


/* AutoComplete */

//Sort names in ascending order
let sortedNames = names.sort();

//reference
let input = document.getElementById("input");
const pai = document.querySelector("#list");

//Execute function on keyup
input.addEventListener("keyup", (e) => {

	//loop through above array
	//Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
	removeElements();
	for (let i of sortedNames) {
		if (input.value == "") {
			pai.style.display = "none";
		} else {
			pai.style.display = "block"
		}
		//convert input to lowercase and compare with each string

		if (
			i.toLowerCase().startsWith(input.value.toLowerCase()) &&
			input.value != ""
		) {
			//create li element
			let listItem = document.createElement("li");
			//One common class name
			listItem.classList.add("list-items");
			listItem.style.cursor = "pointer";
			listItem.setAttribute("onclick", "displayNames('" + i + "')");
			//Display matched part in bold
			let word = "<b>" + i.substr(0, input.value.length) + "</b>";
			word += i.substr(input.value.length);
			//display the value in array
			listItem.innerHTML = word;
			document.querySelector(".list").appendChild(listItem);
		}
	}
});

function displayNames(value) {
	pai.style.display = "none"
	input.value = value;
	removeElements();
}

function removeElements() {
	//clear all the item
	let items = document.querySelectorAll(".list-items");
	items.forEach((item) => {
		item.remove();
	});
}

/* Marca Autocomplete */

/* AutoComplete */

//Sort names in ascending order

var loadingBG = document.querySelector('.loadingBG')

function submitLoad() {
	loadingBG.style.display = "flex"
}

function mask(o, f) {
	setTimeout(function () {
		var v = mphone(o.value);
		if (v != o.value) {
			o.value = v;
		}
	}, 1);
}

function mphone(v) {
	var r = v.replace(/\D/g, "");
	r = r.replace(/^0/, "");
	if (r.length > 10) {
		r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
	} else if (r.length > 5) {
		r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
	} else if (r.length > 2) {
		r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
	} else {
		r = r.replace(/^(\d*)/, "($1");
	}
	return r;
}

document.getElementById("messageForm").addEventListener("submit", function (event) {
	event.preventDefault();
	var message = document.getElementById("message").value;
	var name = document.getElementById("name").value;
	var number = document.getElementById("number").value;
	var ano = document.getElementById("ano").value;
	var email = document.getElementById("email").value;
	var device = document.querySelector(".dispositivo").value;
	var marca = document.querySelector("#marca").value;
	var predif = `
Olá, boa tarde! Me chamo ${name}.
Tenho um ${marca} ${device} ${ano}

${message}

Informações de contato:

Nome: ${name}
Número: ${number}
E-Mail: ${email}

Obrigado(a) pela atenção!
	  
	  `;
	const predifFim = encodeURIComponent(predif);
	const whatsappLink = `https://wa.me/+559892343067?text=${predifFim}`;
	document.getElementById("whatsappLink").setAttribute("href", whatsappLink);
	document.getElementById("whatsappLink").click();
});
