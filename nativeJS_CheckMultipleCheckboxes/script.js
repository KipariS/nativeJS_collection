document.addEventListener('DOMContentLoaded', ready);


function ready() {

	const checkboxes = document.querySelectorAll('input[type="checkbox"]');
	let lastChecked;

	function handleCheck(e) {
		// set a flag for range
		let inBetween = false;
		
		// Check if user 'hold ShiftBtn' and 'Checked input'
		if (e.shiftKey && this.checked) {
			// loop through all
			checkboxes.forEach( checkbox => {
				// check if it's 'current Checkbox' or 'lastChecked'
				// if 'true' change the flag for range
				if (checkbox === this || checkbox === lastChecked) {
					inBetween = !inBetween;
				}
				// if flag 'true' checking current looping check
				if (inBetween) {
					checkbox.checked = true;
				}
			} )

		}

		// change flag of lastChecked
		lastChecked = this;
	}

	checkboxes.forEach( checkbox => checkbox.addEventListener('click', handleCheck) );

}

