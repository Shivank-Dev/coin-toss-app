let playerWinningCounter = computerWinningCounter = 0;

const initVariables = (playerSelection) => {
    const coin = ['heads', 'tails'];
    const coinData = {
        computerSelection: getCoinResult(coin),
        playerSelection: playerSelection,
        selectionText: document.getElementById("selectionText"),
        winningText: document.getElementById("winningText"),
        oldComputerWinningCounter: document.getElementById("computerWinningCounter"),
        oldPlayerWinningCounter: document.getElementById("playerWinningCounter"),
        winningCounterWrapper: document.getElementById("winning-counter-wrapper")
    }
    processResult(coinData);
}

const processResult = (coinData) => {
    selectionText.innerText = "Computer Selected " + coinData.computerSelection;
    if (coinData.playerSelection === coinData.computerSelection) {
        playerWinningCounter += 1;
        coinData.winningText.innerText = "Player Wins";
    } else {
        computerWinningCounter += 1; 
        coinData.winningText.innerText = "Computer Wins";
    }
    bindDataToUi(coinData);
}

const bindDataToUi = (coinData) => {
    coinData.oldPlayerWinningCounter.innerText = "Player: " + playerWinningCounter;
    coinData.oldComputerWinningCounter.innerText = "Computer: " + computerWinningCounter;
    coinData.winningCounterWrapper.style.display = "flex";
}


const getCoinResult = (coin) => {
    return coin[Math.floor(Math.random() * coin.length)]
}
