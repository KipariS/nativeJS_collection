// Data for practice

const people = [
	{ name:"Ivan", year: 1991 },
	{ name:"Adam", year: 1978 },
	{ name:"Cris", year: 1963 },
	{ name:"Ralf", year: 1997 },
	{ name:"Eva", year: 2003 },
	{ name:"Barry", year: 1888 }
];

const comments = [
	{ id: '836582', text: 'Sounds awesome'},
	{ id: '645772', text: 'This is a comment'},
	{ id: '241117', text: 'Super!!!'},
	{ id: '133413', text: 'I"m a comment too'},
	{ id: '196300', text: 'Not Bad))'},
	{ id: '149398', text: 'No more of this'},
	{ id: '198633', text: 'This is a comment with ID 198633'}
];



// =========================================
// METHODS
// =========================================

// Array.prototype.some()  ===============
// TODO: is at least one person 19's?
// My RESULT:
const isAdult = people.some( (person) => ((new Date().getFullYear()) - person.year) >= 19);
console.log('===========================================');
console.log("is at least one person 19's?");
console.log({isAdult});



// Array.prototype.every()  ==================
// TODO: is everyone 19?
// My RESULT:
const isAllAdult = people.every( (person) => ((new Date().getFullYear()) - person.year) >= 19);
console.log('===========================================');
console.log('is everyone 19?');
console.log({isAllAdult});



// Array.prototype.find()  ==================
// TODO: Find comment with ID - 196300
// My RESULT:
const findComment = comments.find( comment => +comment.id === 196300 )
console.log('===========================================');
console.log('Find comment with ID - 196300');
console.log(findComment);



// Array.prototype.findIndex()  ==================
// TODO: Find comment with ID - 133413
// My RESULT:
const findCommentIndex = comments.findIndex( comment => +comment.id == 133413 )
console.log('===========================================');
console.log('Find index of comment with ID - 133413');
console.log(findCommentIndex);

