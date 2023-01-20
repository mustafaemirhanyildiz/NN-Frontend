var container = document.getElementById("animate");
var checkButton = document.querySelector("#check");
var emoji = ["😁", "😂", "😄", "🤣", "🤪", "😜", "😃", "🤓"];
var  emojiSad=['🤔',' ☹️','🙁','😕','😔','😞','😔','😦','😑']
var emojiStart=[...emoji,...emojiSad]
var circles = [];
var size;
var spanCount;



var musty;
let counter=0;

const buttons=document.querySelectorAll('.ripple')

buttons.forEach(button=>{
    button.addEventListener('click',function(e){
        const x=e.clientX   //clientX and clientY are the coordinates of the mouse pointer when a mouse event was triggered
        const y=e.clientY
        const buttonTop=e.target.offsetTop
        const buttonLeft=e.target.offsetLeft

        const xInside=x-buttonLeft
        const yInside=y-buttonTop

        const circle=document.createElement('span')
        circle.classList.add('circle')
        circle.style.top=yInside+'px'
        circle.style.left=xInside+'px'

        this.appendChild(circle)

        setTimeout(()=>circle.remove(),500)

    })
}) 

function makeEmojiList(emoji){
  for (var i = 0; i < 15; i++) {
    addCircle(
      i * 150,
      [10 + 0, 300],
      emoji[Math.floor(Math.random() * emoji.length)]
    );
    addCircle(
      i * 150,
      [10 + 0, -300],
      emoji[Math.floor(Math.random() * emoji.length)]
    );
    addCircle(
      i * 150,
      [10 - 200, -300],
      emoji[Math.floor(Math.random() * emoji.length)]
    );
    addCircle(
      i * 150,
      [10 + 200, 300],
      emoji[Math.floor(Math.random() * emoji.length)]
    );
    addCircle(
      i * 150,
      [10 - 400, -300],
      emoji[Math.floor(Math.random() * emoji.length)]
    );
    addCircle(
      i * 150,
      [10 + 400, 300],
      emoji[Math.floor(Math.random() * emoji.length)]
    );
    addCircle(
      i * 150,
      [10 - 600, -300],
      emoji[Math.floor(Math.random() * emoji.length)]
    );
    addCircle(
      i * 150,
      [10 + 600, 300],
      emoji[Math.floor(Math.random() * emoji.length)]
    );
  }
  
}


function addCircle(delay, range, color) {
  setTimeout(function() {
    var c = new Circle(
      range[0] + Math.random() * range[1],
      80 + Math.random() * 4,
      color,
      {
        x: -0.15 + Math.random() * 0.3,
        y: 1 + Math.random() * 1,
      },
      range
    );
    circles.push(c);
  }, delay);
}

function Circle(x, y, c, v, range) {
  var _this = this;
  this.x = x;
  this.y = y;
  this.color = c;
  this.v = v;
  this.range = range;
  this.element = document.createElement("span");
  /*this.element.style.display = 'block';*/
  this.element.style.opacity = 0;
  this.element.style.position = "absolute";
  this.element.style.fontSize = "26px";
  this.element.style.color =
    "hsl(" + ((Math.random() * 360) | 0) + ",80%,50%)";
  this.element.innerHTML = c;
  container.appendChild(this.element);

  this.update = function() {
    if (_this.y > 1100 ) {
      if(spanCount==0){
        this.element.remove();
        cancelAnimationFrame(musty);  
        circles=[];
        makeEmojiList(emoji);
      }
      else{
        this.element.remove();

      }

    

    }
    _this.y += _this.v.y;
    _this.x += _this.v.x;
    this.element.style.opacity = 1;
    this.element.style.transform =
      "translate3d(" + _this.x + "px, " + _this.y + "px, 0px)";
    this.element.style.webkitTransform =
      "translate3d(" + _this.x + "px, " + _this.y + "px, 0px)";
    this.element.style.mozTransform =
      "translate3d(" + _this.x + "px, " + _this.y + "px, 0px)";
  };
}

makeEmojiList(emojiStart);
animateMusty();

// Count the number of span elements inside the div


function animateMusty() {
    console.log("animate");
    spanCount = container.getElementsByTagName("span").length;
    console.log(spanCount);
    for (var i in circles) {
      circles[i].update();
    }
    musty= requestAnimationFrame(animateMusty);

}

