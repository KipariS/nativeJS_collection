const konami = 'kiparis';
const konamiArr = [];

window.addEventListener('keyup', (e) => {
	konamiArr.push(e.key);
	konamiArr.splice( -konami.length - 1, konamiArr.length - konami.length );

	if ( konamiArr.join('').includes(konami) ) {

		alert("!!! CONGRATULATIONS! IT'S KONAMI CODE !!!");
	}
});












