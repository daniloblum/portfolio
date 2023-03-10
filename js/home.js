const heroDivider = document.querySelectorAll('#divider path');
const heroHeight = document.querySelector('.hero__divider').scrollHeight;
const headerHeight = document.querySelector('.header');
const headerBrand = document.querySelector('.brand__link');

// Hero behavior
window.addEventListener('scroll', function () {
	const value1 = 100 - ((window.scrollY * 100) / heroHeight) * 1.5;
	const value2 = 70 - ((window.scrollY * 70) / heroHeight) * 1.5;
	const value3 = 0;

	heroDivider.forEach(pathElement => {
		if (pathElement.classList.contains('divider-desktop')) {
			pathElement.setAttribute('d', 'M0 ' + value1 + ' L60 ' + value2 + ' L100 ' + value3 + ' V100 H0 Z');
		} else {
			pathElement.setAttribute('d', 'M0 ' + value1 + ' L100 ' + value2 + ' L100 ' + value3 + ' V100 H0 Z');
		}
	});

	if (value1 <= 0) {
		headerBrand.classList.remove('d-none');
		headerBrand.classList.add('d-block');
	} else {
		headerBrand.classList.remove('d-block');
		headerBrand.classList.add('d-none');
	}
});
