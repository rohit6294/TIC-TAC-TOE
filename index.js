var flag = 1;

// Function called whenever user clicks on any box
function myfunc(boxNumber) {
    var box = document.getElementById('b' + boxNumber);

    if (flag == 1) {
        box.value = "X";
        box.disabled = true;
        flag = 0;
    } else {
        box.value = "0";
        box.disabled = true;
        flag = 1;
    }

    checkWinner();
}

// Function to check for winner
function checkWinner() {
    var b1 = document.getElementById("b1").value;
    var b2 = document.getElementById("b2").value;
    var b3 = document.getElementById("b3").value;
    var b4 = document.getElementById("b4").value;
    var b5 = document.getElementById("b5").value;
    var b6 = document.getElementById("b6").value;
    var b7 = document.getElementById("b7").value;
    var b8 = document.getElementById("b8").value;
    var b9 = document.getElementById("b9").value;

    // Check for Player X win conditions
    if ((b1 == 'X' && b2 == 'X' && b3 == 'X') || (b1 == 'X' && b4 == 'X' && b7 == 'X') ||
        (b7 == 'X' && b8 == 'X' && b9 == 'X') || (b3 == 'X' && b6 == 'X' && b9 == 'X') ||
        (b1 == 'X' && b5 == 'X' && b9 == 'X') || (b3 == 'X' && b5 == 'X' && b7 == 'X') ||
        (b2 == 'X' && b5 == 'X' && b8 == 'X') || (b4 == 'X' && b5 == 'X' && b6 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        disableAll();
    }
    // Check for Player 0 win conditions
    else if ((b1 == '0' && b2 == '0' && b3 == '0') || (b1 == '0' && b4 == '0' && b7 == '0') ||
        (b7 == '0' && b8 == '0' && b9 == '0') || (b3 == '0' && b6 == '0' && b9 == '0') ||
        (b1 == '0' && b5 == '0' && b9 == '0') || (b3 == '0' && b5 == '0' && b7 == '0') ||
        (b2 == '0' && b5 == '0' && b8 == '0') || (b4 == '0' && b5 == '0' && b6 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
        disableAll();
    }
    // Check for Tie condition
    else if (b1 != "" && b2 != "" && b3 != "" && b4 != "" && b5 != "" && b6 != "" && b7 != "" && b8 != "" && b9 != "") {
        document.getElementById('print').innerHTML = "Match Tie";
    }
    else {
        document.getElementById('print').innerHTML = (flag == 1) ? "Player X Turn" : "Player 0 Turn";
    }
}

// Function to disable all boxes
function disableAll() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById('b' + i).disabled = true;
    }
}

// Function to reset game
function myfunc_2() {
    location.reload();
}
