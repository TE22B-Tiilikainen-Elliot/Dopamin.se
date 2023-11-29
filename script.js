const body = document.querySelector("body");
const main = document.getElementById("main")

var boxes = 0;
let video = 0;

const videos = [
  'https://www.youtube.com/embed/Pt5_GSKIWQM?si=6FtNU6HUs0d1mRIe&autoplay=1'
  ,'https://www.youtube.com/embed/ChBg4aowzX8?si=BU6f3RM_lBnv_9M8&amp&autoplay=1'
  ,'https://www.youtube.com/embed/bHTjGKjdUiU?si=-8_79aAHmX9nlbxZ&amp&autoplay=1'
  ,'https://www.youtube.com/embed/9eqvo0uqpTs?si=TxMTK1E3qFJOUcES&amp&autoplay=1'
  ];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

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
    if (video == videos.length) {
      video = 0;
    }
    document.getElementById(i).innerHTML =
    "<iframe src='" + videos[video] + "' frameborder='0'></iframe>";
    video++
  }
}


body.onload = body.onresize = Blocks;