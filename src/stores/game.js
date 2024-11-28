import { defineStore } from 'pinia';

/**
 * Configuration settings based on difficulty levels.
 */
const difficultyConfigs = {
  easy: {
    rows: 2,
    cols: 2,
    maxNum: 10,
    timing: 10,
    rerolls: 3,
  },
  medium: {
    rows: 3,
    cols: 3,
    maxNum: 100,
    timing: 5,
    rerolls: 2,
  },
  hard: {
    rows: 4,
    cols: 4,
    maxNum: 1000,
    timing: 3,
    rerolls: 1,
  },
};

/**
 * Retrieves the configuration for the given difficulty level.
 * @param {string} difficulty
 * @returns {Object}
 */
function getConfigByDifficulty(difficulty) {
  return difficultyConfigs[difficulty];
}

export const useGame = defineStore('game', {
  state: () => ({
    matrix: [],
    currentNumber: 0,
    config: {
      rows: 0,
      cols: 0,
      maxNum: 0,
      timing: 0,
      rerolls: 0,
    },
    difficulty: 'easy',
    gameState: 'pick', // Possible values: 'pick', 'gameOver', 'gameWon'
    startTime: null,
    endTime: null,
    rerollsLeft: 0,
    timerStartTimestamp: null,
    timerInstance: null,
  }),

  actions: {
    /**
     * Calculates the remaining time in seconds.
     * @returns {number}
     */
    getTimeLeft() {
      if (this.isGameOver() || !this.timerInstance) {
        return 100;
      }
      const elapsedTime = (Date.now() - this.timerStartTimestamp) / 1000;
      return Math.max(0, this.config.timing - elapsedTime);
    },

    /**
     * Sets the difficulty level and initializes the game accordingly.
     * @param {string} difficulty
     */
    setDifficulty(difficulty) {
      if (!['easy', 'medium', 'hard'].includes(difficulty)) {
        throw new Error('Invalid difficulty');
      }

      this.config = getConfigByDifficulty(difficulty);
      this.difficulty = difficulty;
      localStorage.setItem('gameDifficulty', difficulty);

      this.initializeGame();
    },

    /**
     * Initializes the game state.
     */
    initializeGame() {
      this.generateNewNumber();
      this.gameState = 'pick';
      this.startTime = null;
      this.endTime = null;
      this.rerollsLeft = this.config.rerolls;
      this.timerStartTimestamp = null;
      clearTimeout(this.timerInstance);

      // Initialize the matrix
      this.matrix = Array.from({ length: this.config.rows }, (_, rowIndex) =>
        Array.from({ length: this.config.cols }, (_, colIndex) => ({
          value: null,
          isRevealed: false,
          row: rowIndex,
          col: colIndex,
        }))
      );
    },

    /**
     * Checks if the game has ended.
     * @returns {boolean}
     */
    isGameOver() {
      return this.gameState === 'gameOver' || this.gameState === 'gameWon';
    },

    /**
     * Loads the game difficulty from local storage.
     */
    loadDifficultyFromLocalStorage() {
      const difficulty = localStorage.getItem('gameDifficulty');
      this.difficulty = difficulty || 'easy';
    },

    /**
     * Generates a new random number for the current turn.
     */
    generateNewNumber() {
      this.currentNumber = Math.floor(Math.random() * this.config.maxNum);
    },

    /**
     * Checks if all revealed cells in the matrix are in ascending order.
     * If all cells are revealed and in order, the game is won.
     * @returns {boolean}
     */
    checkAscendingOrder() {
      let lastValue = -Infinity;
      let allCellsRevealed = true;

      for (const row of this.matrix) {
        for (const cell of row) {
          if (!cell.isRevealed) {
            allCellsRevealed = false;
            continue;
          }
          if (cell.value < lastValue) {
            return false;
          }
          lastValue = cell.value;
        }
      }

      if (allCellsRevealed) {
        this.endGame('gameWon');
      }

      return true;
    },

    /**
     * Handles the end of the game.
     * @param {string} state - 'gameOver' or 'gameWon'
     */
    endGame(state) {
      this.gameState = state;
      this.endTime = Date.now();
      this.timerStartTimestamp = null;
      clearTimeout(this.timerInstance);
    },

    /**
     * Sets the value of a cell in the matrix.
     * @param {number} rowIndex
     * @param {number} colIndex
     */
    setCell(rowIndex, colIndex) {
      if (this.startTime === null) {
        this.startTime = Date.now();
      }
      const cell = this.matrix[rowIndex][colIndex];

      if (cell.isRevealed || this.isGameOver()) {
        return;
      }

      // Update the cell
      cell.value = this.currentNumber;
      cell.isRevealed = true;

      // Check game state
      if (!this.checkAscendingOrder()) {
        this.endGame('gameOver');
        return;
      }

      // Generate new number and reset timer
      this.generateNewNumber();
      this.resetTimer();
    },

    /**
     * Resets the turn timer.
     */
    resetTimer() {
      clearTimeout(this.timerInstance);

      this.timerInstance = setTimeout(() => {
        if (this.gameState !== 'pick') {
          return;
        }
        this.endGame('gameOver');
      }, this.config.timing * 1000);

      this.timerStartTimestamp = Date.now();
    },

    /**
     * Retrieves the current game matrix and dimensions.
     * @returns {Object}
     */
    getMatrix() {
      return {
        matrix: this.matrix,
        rows: this.config.rows,
        cols: this.config.cols,
      };
    },

    /**
     * Retrieves a specific cell from the matrix.
     * @param {number} rowIndex
     * @param {number} colIndex
     * @returns {Object}
     */
    getCell(rowIndex, colIndex) {
      return this.matrix[rowIndex][colIndex];
    },

    /**
     * Retrieves the current game configuration.
     * @returns {Object}
     */
    getConfig() {
      return this.config;
    },
  },
});
