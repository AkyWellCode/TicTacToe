var player1 = "Player1", player2 = "Player2", playerTurn = 1, buttonPressed = 0, gameStop = 0;

function setPlayer1Name() {
  player1 = document.getElementById("player1Name").value;
  return false;
}

function setPlayer2Name() {
  player2 = document.getElementById("player2Name").value;
  var vs = document.getElementById("versus"), text = document.createElement("text");
  text.innerHTML = player1 + " vs " + player2;
  text.style.color = "blue";
  text.style.fontSize = "35px";
  vs.append(text);
  return false;
}

function nextTurn(clicked_id) {
  var id = clicked_id;
  if (playerTurn === 1) {
    var image = document.getElementById(id).value;
    document.getElementById(id).value = 10;
    document.getElementById(image).src = "x.png"
    ++playerTurn;
    ++buttonPressed;
  } else if (playerTurn === 2) {
    image = document.getElementById(id).value;
    document.getElementById(id).value = 20;
    document.getElementById(image).src = "zero.png";
    --playerTurn;
    ++buttonPressed;
  }
  if (((document.getElementById("square1").value && document.getElementById("square2").value) && (document.getElementById("square3").value == document.getElementById("square1").value) && (document.getElementById("square2").value == document.getElementById("square3").value)) ||
      ((document.getElementById("square4").value && document.getElementById("square5").value) && (document.getElementById("square6").value == document.getElementById("square4").value) && (document.getElementById("square5").value == document.getElementById("square6").value)) ||
      ((document.getElementById("square7").value && document.getElementById("square8").value) && (document.getElementById("square9").value == document.getElementById("square7").value) && (document.getElementById("square8").value == document.getElementById("square9").value))) {
        if (playerTurn === 1) { /* Horizontal Check */
          alert("Game won by " + player2 + " !");
          gameStop = 1;
        } else {
          alert("Game won by " + player1 + " !");
          gameStop = 1;
        }
  }
  if (((document.getElementById("square1").value && document.getElementById("square4").value) && (document.getElementById("square4").value == document.getElementById("square7").value) && (document.getElementById("square1").value == document.getElementById("square7").value)) ||
      ((document.getElementById("square2").value && document.getElementById("square5").value) && (document.getElementById("square5").value == document.getElementById("square8").value) && (document.getElementById("square2").value == document.getElementById("square8").value)) ||
      ((document.getElementById("square3").value && document.getElementById("square6").value) && (document.getElementById("square6").value == document.getElementById("square9").value) && (document.getElementById("square3").value == document.getElementById("square9").value))) {
        if (playerTurn === 1) { /* Vertical Check */
          alert("Game won by " + player2 + " !");
          gameStop = 1;
        } else {
          alert("Game won by " + player1 + " !");
          gameStop = 1;
        }
  }
  if (((document.getElementById("square1").value && document.getElementById("square5").value) && (document.getElementById("square5").value == document.getElementById("square9").value) && (document.getElementById("square1").value == document.getElementById("square9").value)) ||
      ((document.getElementById("square3").value && document.getElementById("square5").value) && (document.getElementById("square5").value == document.getElementById("square7").value) && (document.getElementById("square3").value == document.getElementById("square7").value))) {
        if (playerTurn === 1) { /* Diagonal Check */
          alert("Game won by " + player2 + " !");
          gameStop = 1;
        } else {
          alert("Game won by " + player1 + " !");
          gameStop = 1;
        }
  }
  if (buttonPressed === 9 && gameStop === 0) { /* Draw Check */
    alert("It's a draw!!");
  }
  return false;
}
