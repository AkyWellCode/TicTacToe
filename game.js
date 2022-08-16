let playerTurn = 1, buttonPressed = 0, square1 = document.getElementById("1"), square2 = document.getElementById("2"), square3 = document.getElementById("3"), square4 = document.getElementById("4"), square5 = document.getElementById("5"), square6 = document.getElementById("6"), square7 = document.getElementById("7"), square8 = document.getElementById("8"), square9 = document.getElementById("9");

function setPlayersNameAndDisplay() {
  let text = document.createElement("text");
  text.innerHTML = document.getElementById("player1Name").value + " vs " + document.getElementById("player2Name").value;
  text.style.color = "blue";
  text.style.fontSize = "35px";
  document.getElementById("versus").append(text);
}


function gameUpdate(clicked_id) {
  if (playerTurn === 1) {
    document.getElementById(clicked_id).innerHTML = "X";
    document.getElementById(clicked_id).value = 1;
    ++playerTurn;
    ++buttonPressed;
  } else if (playerTurn === 2) {
    document.getElementById(clicked_id).innerHTML = "O";
    document.getElementById(clicked_id).value = 2;
    --playerTurn;
    ++buttonPressed;
  }
  checkTheWinner();
}

function checkTheWinner() {
  if(checkHorizontal() === true || checkVertical() === true || checkDiagonal() === true) {
    document.getElementById("winner").innerHTML = whoIsTheWinner() + " wins!!!";
    addRestartButton();
  } else if (buttonPressed === 9) {
    document.getElementById("winner").innerHTML = "It's a draw!";
    addRestartButton();
  }
}

function whoIsTheWinner() {
  if (playerTurn === 1) {
    return document.getElementById("player2Name").value;
  }
  return document.getElementById("player1Name").value;
}

function checkHorizontal() {
  if ((square1.value === square2.value && square2.value === square3.value && square3.value === square1.value) ||
      (square4.value === square5.value && square5.value === square6.value && square6.value === square4.value) ||
      (square7.value === square8.value && square8.value === square9.value && square9.value === square7.value)) {
        return true;
      }
      return false;
}

function checkVertical() {
  if ((square1.value === square4.value && square4.value === square7.value && square7.value === square1.value) ||
      (square2.value === square5.value && square5.value === square8.value && square8.value === square2.value) ||
      (square3.value === square6.value && square6.value === square9.value && square9.value === square3.value)) {
        return true;
      }
      return false;
}

function checkDiagonal() {
  if ((square1.value === square5.value && square5.value === square9.value && square9.value === square1.value) ||
      (square3.value === square5.value && square5.value === square7.value && square7.value === square3.value)) {
        return true;
      }
      return false;
}

function addRestartButton() {
  let button = document.createElement("Button");
  button.className = "btn btn-outline-warning";
  button.innerHTML = "Restart Game";
  button.onclick = () => {
    window.location.reload();
  }
  document.getElementById("addRestartButton").append(button);
}
