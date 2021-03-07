fetch('https://api.trello.com/1/boards/6043b6b7c5a4cc2a8b71eaa9/lists?key=d19d98d88e0c3d667eaa30e55750de1f&token=e58553bb91a0b6f6aa5c06add1eb3b2a345bef8e6e754fcd02690d2416c1bd44').then(function (response) {
	// The API call was successful!
	console.log('success!', response);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});


// Menu Hamburguer
const iconMenu = document.getElementById('menu-hamburguer');
const menuExit = document.getElementById('menu-exit')
const exitIcon = document.getElementById('exit-icon')

iconMenu.addEventListener('click', () => {
	menuExit.style.display = 'block'
})

exitIcon.addEventListener('click', () => {
	menuExit.style.display = 'none'
})
// Menu Hamburguer
function isEmpty(){
	if (tId.value == ""){
		return alert("The dashboard can't be read")
	}
}
