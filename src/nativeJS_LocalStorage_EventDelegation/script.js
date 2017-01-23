// check and parse storage
const storageDataStr = localStorage.getItem('itemsList');
const items = JSON.parse(storageDataStr) || [];

// find Elements
const form = document.querySelector('.add_form');
const input = document.querySelector('.new_item');
const listEl = document.querySelector('.list');

// if storage Data exist - render it
if (storageDataStr) {
	renderList(items, listEl);
}


function inputHandler(e) {
	if ( this.value ) {
		input.classList.remove('err');
	}
	else {
		input.classList.add('err');
	}
}

function addItem(e) {
	e.preventDefault();

	const name = this.querySelector('[name="newItem"]').value.trim(); //get value from input
	if ( !name ) {
		input.classList.add('err');
		input.focus();
		return;
	}
	const item = {
		name: name,
		check: false
	}; // add value to obj
	items.push(item); // push obj to items Arr

	localStorage.setItem('itemsList', JSON.stringify(items));

	renderList(items, listEl); //reRender List
	this.reset(); //clear form
}

function renderList(listArr, parentEl) {
	parentEl.innerHTML = listArr.map( (item,index) => {
		return `
			<li class="item">
				<input type="checkbox" data-id="${index}" id="item${index}" ${item.check ? 'checked' : ''} />
				<label for="item${index}">${item.name}</label>
			</li>
		`
	}).join('');
}

function checkHandler(e) {
	//Event Deligation (set event on el that Never change)
	if ( !e.target.matches('input') ) {return} // Use event in Input ONLY

	const elId = e.target.dataset.id;
	items[elId].check = !items[elId].check;

	localStorage.setItem('itemsList', JSON.stringify(items));
	console.log(items[elId].check);
}



form.addEventListener('submit', addItem);
listEl.addEventListener('click', checkHandler);
input.addEventListener('input', inputHandler)












