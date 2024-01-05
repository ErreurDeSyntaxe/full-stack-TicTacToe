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
        }
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

const game = Gameboard();
game.printBoard();