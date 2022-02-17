
/**
 * Returns a random number between 1 and 100
 */

function randomNumber(){ //
    return Math.floor(
        Math.random() * (100 - 1) + 1
    )
}

module.exports ={
    randomNumber
}