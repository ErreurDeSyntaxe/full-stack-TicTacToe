// console.log("Hello, world!");

function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(Cell());
        }
    }

    const getBoard = () => board;

    const printBoard = () => {
        for (let i = 0; i < rows; i++) {
            console.log("row " + i + " " +
                board[i][0].getValue() + "|" +
                board[i][1].getValue() + "|" +
                board[i][2].getValue());
        }
        console.log("************");
    }

    const writeToken = (row, column, token) => {
        if (board[row][column].getValue() === "-") {
            board[row][column].setValue(token);
            return true;
        } return false;
    }

    return { getBoard, printBoard, writeToken };
};

function Cell() {
    let value = "-";

    const getValue = () => value;

    const setValue = (token) => {
        value = token;
    }

    return { getValue, setValue };
};

function GameController() {
    const board = Gameboard();

    const players = [
        { name: "Player 1 (X)", token: "X" },
        { name: "Player 2 (O)", token: "O" }
    ];

    let activePlayer = players[0];

    const switchPlayer = () => {
        if (activePlayer === players[0]) {
            activePlayer = players[1];
        } else {
            activePlayer = players[0];
        }
    };

    const getActivePlayer = () => activePlayer;

    const printRound = () => {
        board.printBoard();
        console.log(getActivePlayer().name + "'s turn to play");
        console.log("************");
    };

    const playRound = (row, column) => {
        if (board.writeToken(row, column, getActivePlayer().token)) {
            //win conditions
            // if (board[0][0].getValue() == "X") {
            //     console.log(getActivePlayer().name + " wins!");
            // }
            console.log(board[0][1].getValue());
            switchPlayer();
            printRound();
        }
        else {
            console.log("That cell is already taken. Play again.");
            printRound();
        }
    };

    printRound();

    return { playRound };
};

const game = GameController();