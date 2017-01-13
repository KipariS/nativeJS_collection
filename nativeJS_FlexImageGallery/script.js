document.addEventListener('DOMContentLoaded', ready);


function toggleOpenPanel() {
	this.classList.toggle('open');
}

function openHandler(e) {
	if (e.propertyName === 'flex-grow') {
		this.classList.toggle('open_active');
	}
}


function ready() {
	const panels = document.querySelectorAll('.panel');
	panels.forEach( (panel) => { panel.addEventListener('click', toggleOpenPanel) } )
	panels.forEach( (panel) => { panel.addEventListener('transitionend', openHandler) } )

}

