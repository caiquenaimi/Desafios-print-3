const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");
let idx = 0;

function carrossel() {
  idx++;

  if (idx > img.length - 1) {
    idx = 0;
  }

  if (window.innerWidth <= 900) {
    imgs.style.transform = `translateX(${-idx * 300}px)`;
  } else {
    imgs.style.transform = `translateX(${-idx * 500}px)`;
  }
}

setInterval(carrossel, 4000);
