// @ts-nocheck
let div,
  initialX,
  initialY,
  lastX,
  lastY,
  count = 0;
addEventListener("mousedown", function down(e) {
  if (e.target.matches("div")) {
    if (e.buttons === 1) {
      div = e.target;
      let temp = div.style.transform,
        pos = temp ? getpos(div.style.transform) : undefined;
      lastX = e.pageX;
      lastY = e.pageY;
      initialX = pos ? pos[0] : 0;
      initialY = pos ? pos[1] : 0;
      addEventListener("mousemove", move);
      e.preventDefault();
      count += 1;
      div.style.zIndex = count;
      div.style.background = `rgba(${random(256)},${random(256)},${random(256)},0.6)`;
    }
  }
});
function move(e) {
  let x,y,moveX,moveY,
    id = e.target.id;
  (width =
    document.getElementsByTagName("main")[0].clientWidth - (65 * id || 65)),
    (height =
      document.getElementsByTagName("main")[0].clientHeight - (65 * id || 65));
  // console.log(width, height);
  if (e.buttons !== 1) {
    removeEventListener("mousemove", move);
  } else {
      moveX = e.pageX - lastX;
      moveY = e.pageY - lastY;
      x = moveX + initialX;
      y = moveY + initialY;
      div.style.transform = `translate(${x}px,${y}px)`;
  }
}
function getpos(pos) {
  let temp = pos.slice(10).split(",");
  var x, y;
  (x = temp[0].slice(0, temp[0].length - 2)),
    (y = temp[1].slice(0, temp[1].length - 3));
  return [+x, +y];
}
function random(x) {
  return Math.floor(Math.random() * x);
}
