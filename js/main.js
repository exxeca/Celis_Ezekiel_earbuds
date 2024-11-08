(() => {

  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

//Data 

const infoBoxes = [ 
  {
    title: "led light",
    text: "an extra element on the earpud to add more design elements to it",
    image: "images/image2.jpg"
  },
  {
    title: "motherboard",
    text: "The chipset is a collection of microchips on the motherboard",
    image: "images/image4.jpg"
  },
  {
    title: "main speaker",
    text: "This is the main speaker for the ear pod",
    image: "images/image3.jpg"
  },
  {
    title: "charging pot",
    text: "This is the main charging pot",
    image: "images/image1.jpg"
  }
]

function loadInfo() {
  infoBoxes.forEach((infoBox, index)=>{

    let selected = document.querySelector(`#hotspot-${index+1}`);

    const title = document.createElement("h2");
    title.textContent= infoBox.title;

    const text = document.createElement("p");
    text.textContent = infoBox.text;

    image = document.createElement('img');
      image.src = infoBox.image;
      image.style.width = "90%";

    selected.appendChild(image);
    selected.appendChild(title);
    selected.appendChild(text);
  })
}

//call the function to load data
function modelLoaded() {
  loadInfo();
}


  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event listeners
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

})();

