// Get the modal
let modal = document.getElementById('myModal');

//set modal image
let modalImg = document.getElementById('img01');

//display the modal
function openModal() {
	document.getElementById('myModal').style.display = 'block';
}

//Get the image that a user clicks on
document.addEventListener(
	'click',
	function(event) {
		// If the clicked element doesn't have the right selector, abort
		if (!event.target.matches('.myImg')) return;

		// Don't follow the link
		event.preventDefault();

		//push image into modal
		//modalImg.src = this.src;
		document.getElementById('img01').src = event.target.src;

		// If the clicked element matches, call the openModal function
		openModal();
	},
	false
);

//To close the modal:

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = 'none';
};
