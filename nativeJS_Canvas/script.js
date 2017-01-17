document.addEventListener('DOMContentLoaded', ready);

function ready() {

	// ============================
	// Canvas create
	const canvas = document.querySelector('#draw');
	const ctx = canvas.getContext('2d');

	// ============================
	// Canvas def. Parameters
	canvas.width = document.documentElement.clientWidth - 5;
	canvas.height = document.documentElement.clientHeight - 5;

	// ============================
	// Starting Parameters
	ctx.lineJoin = "round";
	ctx.lineCap = 'round';
	ctx.lineWidth = 5;


	// ============================
	// Starting Var's
	let isDrawing = false;
	let lastX = 0;
	let lastY = 0;
	let hue = 0;
	let sizeDirection = true;

	// ============================
	// Draw function
	function draw(e) {
		if (!isDrawing) return;

		// color Set
		ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

		ctx.beginPath();
		//start from
		ctx.moveTo(lastX, lastY);
		//go to
		ctx.lineTo(e.offsetX, e.offsetY);
		//draw
		ctx.stroke();

		//update last coords
		[lastX, lastY] = [e.offsetX, e.offsetY];

		// color Update
		hue++;
		hue > 360 ? hue = 0 : true;
		
		// size Update
		if (ctx.lineWidth >= 100 || ctx.lineWidth < 5) {sizeDirection = !sizeDirection}; 
		if (sizeDirection) 
			{ctx.lineWidth++}
		else 
			{ctx.lineWidth--}
	}

	// ============================
	// Mouse Events
	canvas.addEventListener('mousemove', draw)
	canvas.addEventListener('mouseup', () => isDrawing = false)
	canvas.addEventListener('mouseout', () => isDrawing = false)

	canvas.addEventListener('mousedown', (e) => {
		isDrawing = true;
		[lastX, lastY] = [e.offsetX, e.offsetY];
	})

}

