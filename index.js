

const processResult = (coinselection) => {
    const coin = ['heads', 'tails'];
    let playerWinningCounter = 0;
    let computerWinningCounter = 0;
    const computerSelection = getCoinResult(coin);
    const selectionText = document.getElementById("selectionText");
    const winningText = document.getElementById("winningText");
    const oldComputerWinningCounter = document.getElementById("computerWinningCounter");
    const oldPlayerWinningCounter = document.getElementById("playerWinningCounter");
    const winningCounterWrapper = document.getElementById("winning-counter-wrapper");
    selectionText.innerText = "Computer Selected " + computerSelection;
    if (coinselection === computerSelection) {
        playerWinningCounter += 1;
        winningText.innerText = "Player Wins";
    } else {
        computerWinningCounter += 1; 
        winningText.innerText = "Computer Wins";
    }
    oldPlayerWinningCounter.innerText = "Player: " + playerWinningCounter;
    oldComputerWinningCounter.innerText = "Computer: " + computerWinningCounter;
    winningCounterWrapper.style.display = "flex";
}


const getCoinResult = (coin) => {
    return coin[Math.floor(Math.random() * coin.length)]
}
