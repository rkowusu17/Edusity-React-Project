function appendSign(sign) {
  const display = document.getElementById("display");
  display.value += sign;
}

function sign(sign) {
  let displayEL = document.getElementById("display").value;
  let lastSign = displayEL.charAt(displayEL.length - 1);
  if (
    lastSign == "+" ||
    lastSign == "-" ||
    lastSign == "/" ||
    lastSign == "*"
  ) {
    display.value = displayEL.substring(0, displayEL.length - 1);
    display.value += sign;
  } else {
    appendSign(sign);
  }
}
