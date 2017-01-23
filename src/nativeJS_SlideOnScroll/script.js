function debounce(func, wait = 30, immediate = true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};



const sliderImages = document.querySelectorAll('.image');

function checkSlide() {
	sliderImages.forEach( sliderImage => {
		// half way through the image
		const slideInAt = (window.scrollY + window.innerHeight) - (sliderImage.height / 2);
		// pos of image bottom
		const imgBottom = sliderImage.offsetTop + sliderImage.height;

		// booleans for if_else
		const isHalfShown = slideInAt > sliderImage.offsetTop;
		const isNotScrolledPast = window.scrollY < imgBottom;

		if (isHalfShown && isNotScrolledPast) {
			sliderImage.classList.add('active');
		}
		else {
			sliderImage.classList.remove('active');
		}
	});
}

checkSlide();
window.addEventListener('scroll', debounce(checkSlide));



















