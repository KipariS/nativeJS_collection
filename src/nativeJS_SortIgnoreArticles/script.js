const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];



function articleIgnore(str) {
	return str.replace(/^(the |a |an )/i, '').trim();
}


const sortedBands = bands.sort( (a, b) => {
	return articleIgnore(a) > articleIgnore(b) ? 1 : -1
} )

document.querySelector('.bands').innerHTML = 
	sortedBands
		.map( band => {
			return `<li class="band">${band}</li>`
		} )
		.join('');























