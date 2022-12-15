const POINTS = {
    ROCK: 1,
    PAPER: 2,
    SCISSORS: 3,
};

const WIN = 6;
const DRAW = 3;

export const mapMove = (play) => {
    if (play === 'A' || play === 'X') {
        return 'ROCK';
    }

    if (play === 'B' || play === 'Y') {
        return 'PAPER';
    }

    return 'SCISSORS';
};

export const chooseMove = (player1, player2) => {
    const move1 = mapMove(player1);

    if (move1 === 'ROCK' && player2 === 'X') {
        return [move1, 'SCISSORS'];
    }

    if (move1 === 'ROCK' && player2 === 'Y') {
        return [move1, 'ROCK'];
    }

    if (move1 === 'ROCK' && player2 === 'Z') {
        return [move1, 'PAPER'];
    }

    if (move1 === 'PAPER' && player2 === 'X') {
        return [move1, 'ROCK'];
    }

    if (move1 === 'PAPER' && player2 === 'Y') {
        return [move1, 'PAPER'];
    }

    if (move1 === 'PAPER' && player2 === 'Z') {
        return [move1, 'SCISSORS'];
    }

    if (move1 === 'SCISSORS' && player2 === 'X') {
        return [move1, 'PAPER'];
    }

    if (move1 === 'SCISSORS' && player2 === 'Y') {
        return [move1, 'SCISSORS'];
    }

    return [move1, 'ROCK'];
};

export const getScore = (player1, player2) => {
    if (player1 === 'ROCK' && player2 === 'SCISSORS') {
        return POINTS[player2];
    }

    if (player1 === 'PAPER' && player2 === 'ROCK') {
        return POINTS[player2];
    }

    if (player1 === 'SCISSORS' && player2 === 'PAPER') {
        return POINTS[player2];
    }

    if (player2 === 'ROCK' && player1 === 'SCISSORS') {
        return WIN + POINTS[player2];
    }

    if (player2 === 'PAPER' && player1 === 'ROCK') {
        return WIN + POINTS[player2];
    }

    if (player2 === 'SCISSORS' && player1 === 'PAPER') {
        return WIN + POINTS[player2];
    }

    return DRAW + POINTS[player2];
};

export default { chooseMove, mapMove, getScore };
