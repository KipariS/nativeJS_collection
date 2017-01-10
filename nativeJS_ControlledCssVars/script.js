document.addEventListener('DOMContentLoaded', ready);

function ready() {

	const inputs = document.querySelectorAll('input.controls__input');

	function handleUpdate() {
		const suffix = this.dataset.suffix || '';
		document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
	};

	inputs.forEach( (input) => {input.addEventListener('change', handleUpdate)} );
	
};

























