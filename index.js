$(".carousel").owlCarousel({
  margin: 10,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000, //2000 ms=2sec
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: false,
    },
  },
});
// propmt
function changefn() {
  setTimeout(function () {
    document.getElementById("heading-edu").innerHTML = "schooling";
    document.getElementById("heading-edu").style.color = "rede";
  }, 5000);
}
changefn();

function startAuto() {
  let text;
  let name = prompt("Enter your name: ");
  if (name == null || name == "") {
    alert("prompt is cancelled");
    text = "Anonymous";
  } else if (name == "saksham" || name == "Saksham") {
    alert("welcome, Saksham");
    text = "Saksham";
  } else {
    alert("kon hai be tu");
    text = "Guest";
  }

  document.getElementById("demo").innerHTML = text;
}
// dark mode
function dark() {
  document.body.classList.toggle("dark");
}

const accordians = document.querySelectorAll(".showbtn");

accordians.forEach((accordian) => {
  const icon = accordian.querySelector(".icons");
  const answer = accordian.querySelector(".answer");

  accordian.addEventListener("click", () => {
    // icon.classList.toggle("active");
    // answer.classList.toggle("active");
    if (icon.classList.contains("active")) {
      icon.classList.remove("active");
      answer.style.maxHeight = null;
    } else {
      icon.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// text animation

const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.innerHTML = "Web Developer";
    text.style.color = "var(--text-color2)";
  }, 0);
  setTimeout(() => {
    text.innerHTML = "FreeLancer";
    text.style.color = "#087f5b";
  }, 4000);
  setTimeout(() => {
    text.innerHTML = "Gamer";
    text.style.color = "#364fc7";
  }, 8000);
};

textLoad();
setInterval(textLoad, 12200);
// function mOver(obj) {
//   obj.innerHTML = "I'M COOL";
//   // obj.style.background = "#81ecdf";
// }

// function mOut(obj) {
//   obj.innerHTML = "ABOUT ME";
//   // obj.style.background = "#2e2e2e";
//   // obj.style.color = "white";
// }
