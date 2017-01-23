const box = document.querySelector('.box');
const text = document.querySelector('.title');
const step = 200;

function moveHandler(e) {
	const { offsetWidth: width, offsetHeight: height } = box;
	let { offsetX: x, offsetY: y } = e;

	if (e.target !== box) {
		x = x + e.target.offsetLeft;
		y = y + e.target.offsetTop;
	}

	const customX = Math.round( x*step/width ) - ( step / 2 );
	const customY = Math.round( y*step/height ) - ( step / 2 );

	text.style.textShadow = `
		${customX}px ${customY * -1}px 3px #ccc,
		${customX * -1}px ${customY}px 3px #ccc,
		${customY}px ${customX * -1}px 3px #ccc,
		${customY * -1}px ${customX}px 3px #ccc
	`;

}











box.addEventListener('mousemove', moveHandler);












