window.addEventListener("load", () => {
  const parent = document.getElementById("parent");
  let flowers = ["🌹","🥀","🌺","🪻","🌻","🌼","🌷","🌱","🪴","🌲","🌳","🌴","🌵","🌾","🌿","☘️","🍀", "🐸"];

  for (let i = 1; i < 10; i++) {
    let button = document.createElement("button");
    button.innerText = "🕳"
    button.onclick = buttonClicked;
    parent.appendChild(button);
  }
  function buttonClicked(e) {
    e.target.innerText = flowers[Math.floor(Math.random()*flowers.length)];
    e.target.onclick = {};
  }
});