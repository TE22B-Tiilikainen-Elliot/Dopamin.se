const body = document.querySelector("body");
const main = document.getElementById("main")

var boxes = 1;

const videos = [
   'https://www.youtube.com/embed/Pt5_GSKIWQM?si=6FtNU6HUs0d1mRIe'
  ,'https://www.youtube.com/embed/ChBg4aowzX8?si=BU6f3RM_lBnv_9M8'
  ,'https://www.youtube.com/embed/bHTjGKjdUiU?si=-8_79aAHmX9nlbxZ'
  ,'https://www.youtube.com/embed/9eqvo0uqpTs?si=TxMTK1E3qFJOUcES'
  ,'https://www.youtube.com/embed/kqFxhfSKZdM?si=OieRKYfFufKGbn92'
  ,'https://www.youtube.com/embed/n_Dv4JMiwK8?si=w3VxPbFFq_lEn6nY'
  ,'https://www.youtube.com/embed/10gjsgA6fTE?si=onRBAVxvywY0mlUY'
  ,'https://www.youtube.com/embed/vVJuMq1CMNo?si=htG_uCsMzJbn9JmX'
  ];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function purchaseVideo() {
  const text = document.getElementById('balance');
  if (parseInt(text.innerHTML) >= 50) {
      text.innerHTML = (parseInt(text.innerHTML) - 50);
      boxes++
      Videos();
  }
}

function Videos() {
  main.innerHTML = "";

  for (let i = 0; i < boxes; i++) {
    var block = document.createElement("div");
    block.className = "blocks";
    block.id = i;
    main.appendChild(block);
    document.getElementById(i).innerHTML =
    "<iframe src='" + videos[getRandomInt(8)] + "&autoplay=1&mute=1&loop=1' frameborder='0'></iframe>";
    
  }
}

var nav_toggle = new Boolean();

function Nav() {
  if (nav_toggle){
    console.log("ja")
    document.getElementById("menu_content").style.display = "flex"
    nav_toggle = false;
  }
  else {
    document.getElementById("menu_content").style.display = "none"
    nav_toggle = true;
  }
}

function updateBalance() {
  const text = document.getElementById('balance');
  text.innerHTML = (parseInt(text.innerHTML) + 1);
}

body.onload = Videos;