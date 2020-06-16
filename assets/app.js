new TypeIt('#simpleUsage', {
	strings          : 'Welcome to my portfolio!',
	speed            : 150,
	waitUntilVisible : true,
	startDelay       : 1000,
	loop             : false,
	loopDelay        : 7500,
	lifeLike         : true
}).go();

function collapse() {
	var x = document.getElementById('myNavbar');
	if (x.className === 'navbar') {
		x.className += ' responsive';
	} else {
		x.className = 'navbar';
	}
}
