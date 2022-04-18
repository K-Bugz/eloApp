const Elo = require('elo-calculator');
// https://www.npmjs.com/package/elo-calculator

const elo = new Elo({
    // The rating of which each initialized player will start with
    rating: 1200,
    // The coefficient, called the K-factor, is the maximum possible adjustment per game.
    // Which value is used depends on one or more the following points:
    // 1. The number of games the player has played
    // 2. The current rating of the player
    // 3. The highest rating the player has ever had.
    // Weak and new players generally have a higher coefficient than stronger, more experienced players.
    // The conditions used to apply a k-factor are based the ones used by the World Chess Federation (http://www.fide.com/fide/handbook.html?id=172&view=article)
    k: [40, 20, 10] // figure this out later
});

// These were there examples
// const player = elo.createPlayer(currentRating, numberOfGamesPlayed, highestRating);
// const player1 = elo.createPlayer(1890);
// const player2 = elo.createPlayer(1900, 50, 1950);
// const player3 = elo.createPlayer(1550); // most likely use this one for elo score. 


winner = { id: 1, elo: 1200 };
loser = { id: 2, elo: 1111 };
// 
function updateUsers(winner, loser) {
    // winner{ id: num, elo:num }
    winner.playerElo = elo.createPlayer(winner.elo);
    // winner{ id: num, elo:num playerElo: <stuff>}
    loser.playerElo = elo.createPlayer(loser.elo);
    console.log(winner, loser);
    elo.updateRatings([[winner.playerElo, loser.playerElo, 1]]);
    winner.elo = winner.playerElo.rating
    loser.elo = loser.playerElo.rating
    // We now have a winner and loser object with id, elo, playerElo object
}

updateUsers(winner, loser);