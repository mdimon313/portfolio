let showBtn = document.querySelector(".show-btn");
let closeBtn = document.querySelector(".close-btn");
let navList = document.querySelector("#nav-list");


showBtn.addEventListener('click', ()=> {
    navList.style = 'left: 0';
    closeBtn.style.display = 'block';
    showBtn.style.display = 'none';
})
closeBtn.addEventListener("click", () => {
    navList.style = "left: -100%";
    closeBtn.style.display = "none";
    showBtn.style.display = "block";
});