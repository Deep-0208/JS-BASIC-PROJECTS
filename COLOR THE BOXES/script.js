let boxes = document.getElementsByClassName("box");
const getRandomColor = () => {
  val1 = Math.ceil(0 + Math.random() * 255);
  val2 = Math.ceil(0 + Math.random() * 255);
  val3 = Math.ceil(0 + Math.random() * 255);
  return `rgba(${val1} , ${val2} , ${val3}`;
};

const GetRandom = () => {
  Array.from(boxes).forEach((box) => {
    box.style.backgroundColor = getRandomColor();
  });
};

setInterval(() => {
  GetRandom()
}, 100);
