const yesBtn = document.getElementById(“yes”);
const noBtn = document.getElementById(“no”);

// funzione che fa scappare il NO
function moveNo() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = “absolute”;
  noBtn.style.left = x + “px”;
  noBtn.style.top = y + “px”;
}

// PC (mouse)
noBtn.addEventListener(“mouseover”, moveNo);

// Tablet / telefono (dito)
noBtn.addEventListener(“touchstart”, moveNo);

// YES che cresce
function growYes() {
  let size = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = (size + 6) + “px”;

  if (size > 80) {
    alert(“OK OK 😭💖 Sei il mio Valentino!”);
  }
}

// click + touch
yesBtn.addEventListener(“click”, growYes);
yesBtn.addEventListener(“touchstart”, growYes);
