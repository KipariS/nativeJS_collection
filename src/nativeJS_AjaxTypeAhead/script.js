// 'use strict'

const dataUrl = 'cities.json';
const cities = [];
fetch(dataUrl)
	.then( blob => blob.json() )
	.then( data => {
		for (let i in data) {
			const citiesInCountryArr = data[i];
			for (let i in citiesInCountryArr) {
				cities.push(citiesInCountryArr[i]);
			}
		};
	} );

function findMatches(inputVal, arrayToSearch) {
	return arrayToSearch.filter( (city) => {
		const regEx = new RegExp (inputVal, 'gi');
		return city.match(regEx);
	});
};

function displayMatches() {
	const matchArr = findMatches(this.value, cities);
	const html = matchArr.map( (city) => {
		return `
			<li class="item">
				<span>${city}</span>
			</li>`;
	}).join('');
	searchList.innerHTML = html;
}

const searchInp = document.querySelector('#search');
const searchList = document.querySelector('#list');

searchInp.addEventListener('change', displayMatches);
searchInp.addEventListener('keyup', displayMatches);
displayMatches();

