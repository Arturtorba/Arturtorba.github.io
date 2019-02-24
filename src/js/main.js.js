document.querySelector('.tabs-header').addEventListener('click', fTabs);

function fTabs(event) {
	if (event.target.className == 'tab-h') {
		var dataTab = event.target.getAttribute('data-tab');
		var tabBody = document.getElementsByClassName('tab-b');
		var tabH = document.getElementsByClassName('tab-h');
		for (var i = 0; i < tabH.length; i++) {
			tabH[i].classList.remove('active');
		}
		event.target.classList.add('active');
		for (var i = 0; i < tabBody.length; i++) {
			if (dataTab == i) {
				tabBody[i].style.display = 'block';
			} else {
				tabBody[i].style.display = 'none';
			}
		}
	}

}

var addfriend = document.getElementById('addfriend');

addfriend.onclick = function () {
	var select = document.getElementById('select');
	var option = select.options[select.selectedIndex].value;
    var div = document.createElement('div');
	div.className = 'block_intrest__select';
	div.addEventListener('click', action);
	var music = document.getElementById('music');
	var computer = document.getElementById('computer');
	var radio = document.getElementById('radio');
	var dance = document.getElementById('dance');
	var pussy = document.getElementById('pussy');

	if (music == null && option == 'musics') {

		div.innerHTML = '<input type="button" class="hide" value="музыка" id="music">';
		parentElem.insertBefore(div, parentElem.firstChild);

	} else {}

	if (!computer && option == 'computers') {
		div.innerHTML = '<input type="button" class="hide" value="компьютеры" id="computer">';
		parentElem.insertBefore(div, parentElem.firstChild);
	} else {}

    if (!radio && option == 'radios') {
		div.innerHTML = '<input type="button" value="радио" class="hide" id="radio">';
		parentElem.insertBefore(div, parentElem.firstChild);
	} else {}

	if (!dance && option == 'dances') {
		div.innerHTML = '<input type="button" value="танцы" class="hide" id="dance">';
		parentElem.insertBefore(div, parentElem.firstChild);
	} else {}
	
	if (!pussy && option == 'pussys') {
		div.innerHTML = '<input type="button" value="кошечки" class="hide" id="pussy">';
		parentElem.insertBefore(div, parentElem.firstChild);
	} else {}


}
  function action() {
	this.remove()
}


var input1 = document.getElementById('name');
input1.value = localStorage.getItem('dataForMyInput1') || 'Виталя Гора';
input1.oninput = function () {
	localStorage.setItem('dataForMyInput1', input1.value);
}

var input2 = document.getElementById('phone');
input2.value = localStorage.getItem('dataForMyInput2') || '+7 (982) 797 67 57';
input2.oninput = function () {
	localStorage.setItem('dataForMyInput2', input2.value);
}

var input3 = document.getElementById('email');
input3.value = localStorage.getItem('dataForMyInput3') || 'artur.torba@mail.ru';
input3.oninput = function () {
	localStorage.setItem('dataForMyInput3', input3.value);
}

