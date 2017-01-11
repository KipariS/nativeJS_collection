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
		{first: 'Max ', last: 'Planck', year: '1858', passed: '1947'},
		{first: '', last: '', year: '', passed: ''},
		{first: '', last: '', year: '', passed: ''},
		{first: '', last: '', year: '', passed: ''},
	]

	const people = ["Rivera Poole", "Lucile Martinez", "Murphy Bennett", "Curry Woodard", "Jimenez Dudley", "Casandra Rowe", "Pansy Sheppard", "Burke Nunez", "Martina Bolton", "Gentry Travis", "Cote Ashley", "Rena Cantu", "Mandy Sandoval", "Isabella Carney", "Tanner Riddle", "Park Knight", "Angelita Merrill", "Sandra Gonzalez", "Horn Rush", "Hendrix Hammond", "Wagner Olson", "Katelyn Kim", "Felecia Snider", "Samantha Atkins", "Harmon Marshall", "Dora Horne", "Love Myers", "Blackburn Kidd", "Betsy James", "Mccray Fuller", "Ellison Bryant", "Avila Simmons", "Effie Roman", "Monique Monroe", "Clarke David", "Wade Morin", "Woodward Prince", "Pennington Savage", "Alexandra Cox", "Elvira Odonnell", "Williams Massey", "Addie Ramos", "Shepard Alford", "Oneil Gamble", "Harris Hernandez", "Hogan Gibson", "Taylor Hardy", "Carrie Branch", "Duncan Richardson", "Carolyn Mccray"]



	// =========================================
	// METHODS
	// =========================================

	// Array.prototype.filter()  ===============
	// TODO: Filter th list of inventors for those who were born in 1500's.

	const filteredInventors = inventors.filter(function(inventor, index) {
		if (inventor.) {}
	});

	console.log(filteredInventors);


	// Array.prototype.map()  ==================
	// TODO: Make an array of the inventory first and last names.



	// Array.prototype.sort()  =================
	// TODO: sort an inventors by birth-date, from oldest to youngest.



	// Array.prototype.reduce()  ===============
	// TODO: How many years did all the inventors live?




	// =========================================
	// EXTRAS
	// =========================================

	// TODO: Sort the inventors by years lived


	// TODO: Sort the people alphabetically by last name
	

	// TODO: 






}

