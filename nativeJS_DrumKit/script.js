document.addEventListener('DOMContentLoaded', ready);

function playSound(e) {
	const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
	const key = document.querySelector(`.key[data-key='${e.keyCode}']`);

	if (!audio || !key) {return};

	audio.currentTime = 0;
	audio.play();
	key.classList.add('plaing');
}

function removeEffects(e) {
	if (e.propertyName !== "transform") {return}
	this.classList.remove('plaing');
}

function ready() {

	const keys = document.querySelectorAll(`.key[data-key]`);
	keys.forEach( (key) => {key.addEventListener('transitionend', removeEffects)} )

	window.addEventListener('keydown', playSound);


}

