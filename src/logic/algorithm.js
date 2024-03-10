function isSafePlace(board, row, col) {
    const len = board.length;

    // Check diagonal \
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] !== '.') {
            return false;
        }
    }

    // Check diagonal /
    for (let i = row, j = col; i >= 0 && j < len; i--, j++) {
        if (board[i][j] !== '.') {
            return false;
        }
    }

    // Check column
    for (let i = row; i >= 0; i--) {
        if (board[i][col] !== '.') {
            return false;
        }
    }

    return true;
}

function backTrackingQueens(result, board, row) {
    const len = board.length;
    if (row === len) {
        for (let i = 0; i < len; i++) {
            let r = [];
            for (let j = 0; j < len; j++) {
                r.push(board[i][j]);
            }
            result.push(r);
        }
        return true; // solution found
    }

    for (let i = 0; i < len; i++) {
        if (isSafePlace(board, row, i)) {
            board[row][i] = 'Q';
            if (backTrackingQueens(result, board, row + 1)) {
                return true;
            }
            board[row][i] = '.';
        }
    }

    result = null;
    return false;
}

// In the file where solve function is defined (e.g., solve.js)
exports.solve = (n) => {
    let result = null;
    if (n > 3 || n === 1) {
        result = [new Array(n).fill('.')];
    }

    let board = new Array(n).fill().map(() => new Array(n).fill('.'));
    backTrackingQueens(result, board, 0);
    return result;
};



/*
const result = this.solve(4);
result.shift();
console.log(result);*/
