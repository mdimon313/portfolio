// Preloder
function loding() {
  let preload = document.querySelector(".loder");
  preload.style.display = "none";
  document.querySelector(".wrapper").style.display = "block";
}

window.addEventListener("load", loding);
// !=============== TOGGLE MENU =============

let showBtn = document.querySelector(".show-btn");
let closeBtn = document.querySelector(".close-btn");
let navList = document.querySelector("#nav-list");

showBtn.addEventListener("click", () => {
  navList.classList.add("visible");
  showBtn.classList.add("none");
  closeBtn.classList.add("block");
});
closeBtn.addEventListener("click", () => {
  navList.classList.remove("visible");
  closeBtn.classList.remove("block");
  showBtn.classList.remove("none");
});

// HIDE MENU WHEN CLICK ANY UL LINK

function hide_menu() {
  navList.classList.remove("visible");
  closeBtn.classList.remove("block");
  showBtn.classList.remove("none");
}

// !================ SCROLL EVENT ================

window.addEventListener("scroll", () => {
  let header = document.querySelector("#header"),
    topArrowBtn = document.querySelector("#topArrowBtn"),
    positionFixed = window.pageYOffset;

  if (positionFixed > 100) {
    header.classList.add("sticky");
    topArrowBtn.classList.add("show-top-arrow");
  }
  if (positionFixed <= 99) {
    header.classList.remove("sticky");
    topArrowBtn.classList.remove("show-top-arrow");
  }
});

// Preview Image
const gallery = document.querySelectorAll(".grid .img"),
  previewBox = document.querySelector(".preview-box"),
  // previewImg = previewBox.querySelector("img"),
  closeIcon = previewBox.querySelector(".close"),
  currentImg = previewBox.querySelector(".current"),
  totalImg = previewBox.querySelector(".total"),
  shadow = document.querySelector(".shadow");

window.onload = () => {
  for (let i = 0; i <= gallery.length; i++) {
    totalImg.textContent = gallery.length;
    let newIndex = i;

    let clickImgIndex;
    gallery[i].onclick = () => {
      clickImgIndex = newIndex;

      // preview image
      function preview() {
        let previewImg = previewBox.querySelector("img");
        currentImg.textContent = newIndex + 1;
        let selectImgUrl = gallery[newIndex].querySelector("img");
        previewImg.src = selectImgUrl.src;
      }

      const prevBtn = document.querySelector(".prev"),
        nxtBtn = document.querySelector(".nxt");

      // if(newIndex == 0) {
      // 	prevBtn.classList.add('btn-none');
      // }
      // if(newIndex > gallery.length -1) {
      // 	nxtBtn.classList.add("btn-none");
      // }

      // Preview Click Event
      prevBtn.onclick = () => {
        newIndex--;
        if (newIndex == 0) {
          preview();
          prevBtn.classList.add("btn-none");
        } else {
          preview();
          nxtBtn.classList.add("btn-block");
        }
      };

      // Next Click Event
      nxtBtn.onclick = () => {
        newIndex++;
        if (newIndex <= gallery.length - 1) {
          preview();
          nxtBtn.classList.remove("btn-block");
        } else {
          preview();
          prevBtn.classList.add("btn-block");
        }
      };
      preview();
      previewBox.classList.add("show");
      shadow.style.display = "block";

      closeIcon.onclick = () => {
        newIndex = clickImgIndex;
        prevBtn.classList.add("btn-block");
        nxtBtn.classList.add("btn-block");
        shadow.style.display = "none";
        previewBox.classList.remove("show");
      };
    };
  }
};

// $('document').ready(function () {
// 	$('.tlt').textillate({
// 		selector: 'text',
// 		minDisplayTime: 2000,
// 		autoStart: true,
// 		in: {
// 			effect: 'rotateInDownRight',
// 			sequence:true
// 		},
// 		out: {
// 			effect: 'rotateoutDownLeft',
// 			sequence: true
// 		}
// 	});
// })
