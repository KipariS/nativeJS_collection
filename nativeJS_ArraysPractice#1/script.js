document.addEventListener('DOMContentLoaded', ready);

function ready() {

	// Data for practice

	const inventors = [
		{first: 'Albert', last: 'Einstein', year: '1879', passed: '1955'},
		{first: 'Isaac', last: 'Newton', year: '1643', passed: '1727'},
		{first: 'Galileo', last: 'Galilei', year: '1564', passed: '1642'},
		{first: 'Marie', last: 'Curie', year: '1867', passed: '1934'},
		{first: 'Johannes', last: 'Kepler', year: '1571', passed: '1630'},
		{first: 'Nicolaus', last: 'Copernicus', year: '1473', passed: '1543'},
		{first: 'Max ', last: 'Planck', year: '1858', passed: '1947'}
	];

	const people = ["Rivera Poole", "Lucile Martinez", "Murphy Bennett", "Curry Woodard", "Jimenez Dudley", "Casandra Rowe", "Pansy Sheppard", "Burke Nunez", "Martina Bolton", "Gentry Travis", "Cote Ashley", "Rena Cantu", "Mandy Sandoval", "Isabella Carney", "Tanner Riddle", "Park Knight", "Angelita Merrill", "Sandra Gonzalez", "Horn Rush", "Hendrix Hammond", "Wagner Olson", "Katelyn Kim", "Felecia Snider", "Samantha Atkins", "Harmon Marshall", "Dora Horne", "Love Myers", "Blackburn Kidd", "Betsy James", "Mccray Fuller", "Ellison Bryant", "Avila Simmons", "Effie Roman", "Monique Monroe", "Clarke David", "Wade Morin", "Woodward Prince", "Pennington Savage", "Alexandra Cox", "Elvira Odonnell", "Williams Massey", "Addie Ramos", "Shepard Alford", "Oneil Gamble", "Harris Hernandez", "Hogan Gibson", "Taylor Hardy", "Carrie Branch", "Duncan Richardson", "Carolyn Mccray"];



	// =========================================
	// METHODS
	// =========================================

	// Array.prototype.filter()  ===============
	// TODO: Filter th list of inventors for those who were born in 1500's.
	// My RESULT:
	const filteredInventors = inventors.filter(function(inventor, index) {
		const yearNum = (+inventor.year);
		const result = yearNum >=1500 && yearNum < 1600 ? true : false;
		return result;
	});
	console.log('===========================================');
	console.log("Filter th list of inventors for those who were born in 1500's.");
	console.table(filteredInventors);



	// Array.prototype.map()  ==================
	// TODO: Make an array of the inventory first and last names.
	// My RESULT:
	const inventorsFullNames = inventors.map(function(inventor, index) {
		return inventor.first + " " + inventor.last;
	});
	console.log('===========================================');
	console.log('Make an array of the inventory first and last names.');
	console.log(inventorsFullNames);



	// Array.prototype.sort()  =================
	// TODO: Sort an inventors by years lived.
	// My RESULT:
	const longLiveSort = inventors.sort( (a, b) => {
		const aAge = a.passed - a.year;
		const bAge = b.passed - b.year;
		return aAge - bAge;
	});
	console.log('===========================================');
	console.log('Sort an inventors by years lived.');
	console.table(longLiveSort);



	// Array.prototype.reduce()  ===============
	// TODO: How many years did all the inventors live together?
	// My RESULT:
	const allLivePeriod = inventors.reduce( (prevProcValue, curentItem, index) => {
		const age = curentItem.passed - curentItem.year; //age of Current
		return prevProcValue + age;
	}, 0 )
	console.log('===========================================');
	console.log('How many years did all the inventors live together?');
	console.log(`${allLivePeriod} years`);





	// =========================================
	// EXTRAS
	// =========================================

	// TODO: Sort an inventors by birthday, from oldest to youngest.
	// My RESULT:
	const birthSort = inventors.sort( (a, b) => a.year < b.year ? -1 : 1 );
	console.log('===========================================');
	console.log('Sort an inventors by birthday, from oldest to youngest.');
	console.table(birthSort);


	// TODO: Sort the people alphabetically by last name
	// My RESULT:
	const alphaLastName = people.sort((a,b) => {
		const result = a.split(' ')[1] < b.split(' ')[1] ? -1 : 1;
		return result;
	})
	console.log('===========================================');
	console.log('Sort the people alphabetically by last name');
	console.log(alphaLastName);


	// TODO: 






}

