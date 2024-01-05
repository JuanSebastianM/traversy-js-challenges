function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

const DEFAULT_RESULT = "roll again";

function getRollResult(diceSum) {
  if (diceSum === 7 || diceSum === 11) {
    return "win"
  }

  if (diceSum === 2 || diceSum === 3 || diceSum === 12) {
    return "lose"
  }

  return DEFAULT_RESULT;
}

function diceGameSimulation(numSimulations) {
  let simulationResults = [];

  for (let i = 0; i < numSimulations; i++) {
    const dice1 = rollDice();
    const dice2 = rollDice();
    const sum = dice1 + dice2;
    const result = getRollResult(sum);

    const newSimulationResult = {
      dice1,
      dice2,
      sum,
      result
    }

    simulationResults.push(newSimulationResult)
  }

  return simulationResults;
}

module.exports = diceGameSimulation;
