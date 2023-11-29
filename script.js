const body = document.querySelector("body");
const main = document.getElementById("main")

var boxes = 0;

function Blocks() {

  if (window.innerWidth < 600) {
    boxes = 2;
  } else {
    boxes = 4;
  }

  main.innerHTML = "";

  for (let i = 0; i < boxes; i++) {
    var block = document.createElement("div");
    block.className = "blocks";
    block.id = i;
    main.appendChild(block);
    document.getElementById(i).innerHTML =
    "<iframe src='https://www.youtube.com/embed/Pt5_GSKIWQM?si=6FtNU6HUs0d1mRIe&autoplay=1' frameborder='0'></iframe>";
  }
}


body.onload = body.onresize = Blocks;