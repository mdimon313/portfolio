// !=============== TOGGLE MENU =============

let showBtn = document.querySelector(".show-btn");
let closeBtn = document.querySelector(".close-btn");
let navList = document.querySelector("#nav-list");


showBtn.addEventListener('click', ()=> {
	navList.style = 'left: 0';
	showBtn.style.display = "none";
    closeBtn.style.display = 'block';
})
closeBtn.addEventListener("click", () => {
    navList.style = "left: -100%";
    closeBtn.style.display = "none";
    showBtn.style.display = "block";
});


// !================ SCROLL EVENT ================

window.addEventListener("scroll", function() {
	let header = document.querySelector("#header");
	let positionFixed = window.pageYOffset;

	if (positionFixed>100) {
		header.classList.add('sticky');
	} 
	if (positionFixed<=99) {
		header.classList.remove('sticky');
	}
})