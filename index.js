window.addEventListener("load", () => {
  let wOffset = window.innerWidth/6;
  let hOffset = window.innerHeight/6;
  let w = window.innerWidth - (wOffset);
  let h = window.innerHeight - hOffset;

  const parent = document.getElementById("parent");
  const heading = document.getElementById("heading");

  let buttons = [];
  let flowers = ["🌹","🥀","🌺","🪻","🌻","🌼","🌷","🌱","🪴","🌲","🌳","🌴","🌵","🌾","🌿","☘️","🍀"];

  for (let i = 1; i < 10; i++) {
    let button = document.createElement("button");
    button.innerText = "🕳"
    button.onclick = buttonClicked;
    // button.style.left = `${(i%3) * 100}px`;
    // button.style.top = `${Math.floor((i-1)/3) * 100}px`;
    // console.log(i, button.style.top)
    parent.appendChild(button);
  }
// Math.floor(i/3)+i%3
  function buttonClicked(el) {
    console.log(el);
  }
});