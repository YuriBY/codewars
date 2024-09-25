function rpsls(pl1,pl2){
    const rockWin = ['lizard', 'scissors'];
    const paperWin = ['rock', 'spock'];
    const scissorsWin = ['paper', 'lizard'];
    const lizardWin = ['spock', 'paper'];
    const spockWin = ['scissors', 'rock']
    if (pl1 === pl2) {
        return 'Draw!'
    } else if (pl1 === 'rock') {
        if (rockWin.includes(pl2)) {
            return 'Player 1 Won!'
        } else return "Player 2 Won!"
    } else if (pl1 === 'paper') {
        if (paperWin.includes(pl2)) {
            return 'Player 1 Won!'
        } else return "Player 2 Won!"
    } else if (pl1 === 'scissors') {
        if (scissorsWin.includes(pl2)) {
            return 'Player 1 Won!'
        } else return "Player 2 Won!"
    }  else if (pl1 === 'lizard') {
        if (lizardWin.includes(pl2)) {
            return 'Player 1 Won!'
        } else return "Player 2 Won!"
    }  else if (pl1 === 'spock') {
        if (spockWin.includes(pl2)) {
            return 'Player 1 Won!'
        } else return "Player 2 Won!"
    }   
    }

    // const MATCH = {
    //     scissors: ['paper', 'lizard'],
    //     paper: ['rock', 'spock'],
    //     rock: ['lizard', 'scissors'],
    //     lizard: ['spock', 'paper'],
    //     spock: ['scissors', 'rock'],
    //   };
      
      
    //   function rpsls(pl1, pl2) {
    //     return MATCH[pl1].indexOf(pl2) >= 0 ? 'Player 1 Won!' :
    //            MATCH[pl2].indexOf(pl1) >= 0 ? 'Player 2 Won!' : 'Draw!';
    //   }


