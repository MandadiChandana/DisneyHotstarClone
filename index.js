let movies = [
  {
    name: "RRR",
    des:
      "RRR centers around fictional versions of two Indian revolutionaries, Alluri Sitarama Raju and Komaram Bheem, their friendship, and their fight against the British Raj.",
    image: "RRR.webp"
  },
  {
    name: "sitaramam",
    des:
      "It is the simple story of a simple man who really wanted and deserved love. When he found that love in a young girl, he went for her in all honesty. Sita's secrets were her own to keep but after living around with Ram and his ever-so-selfless being, she realises what kind of person he is.",
    image: "Sitaramam.webp"
  },
  {
    name: "Brahmastra(part one SHIVA)",
    des:
      "A DJ with superpowers and his ladylove embark on a mission to protect the Brahmastra, a weapon of enormous energy, from dark forces closing in on them. A DJ with superpowers and his ladylove embark on a mission to protect the Brahmastra, a weapon of enormous energy, from dark forces closing in on them.",
    image: "Brahmastra.webp"
  },
  {
    name: "Akhanda",
    des:
      "Murali Krishna is a protector of his village. When he falls into Varadarajulu's trap, Akhanda arrives with the blessings of Lord Shiva and becomes their saviour",
    image: "Akhanda.webp"
  },
  {
    name: "cadaver",
    des:
      "Cadaver is a story of a police surgeon trying to unmask a series of mysterious homicides and all the clues point toward a life sentence prisoner, who hasn't left his cell for years. The biggest of all loose ends in the story is the reason behind his imprisonment.",
    image: "cadaver.webp"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // creating DOM element
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // attaching all element
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting up image
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements classname
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  // adding sliding effect
  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};
for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

// video cards

const videoCards = document.querySelectorAll(".video-card");

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

// cards sliders

let cardContainers = document.querySelectorAll(".card-container");
let preBtns = document.querySelectorAll(".pre-btn");
let nxtBtns = document.querySelectorAll(".nxt-btn");

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
