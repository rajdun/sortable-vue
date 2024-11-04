import { defineStore } from 'pinia'

/**
 * Returns configuration based on the difficulty level.
 * @param {string} difficulty
 * @returns {Object}
 */
function getConfigBasedOnDifficulty(difficulty) {
  let config = {
    easy: {
      rows: 2,
      cols: 2,
      maxNum: 10,
      timing: 10,
    },
    medium: {
      rows: 3,
      cols: 3,
      maxNum: 100,
      timing: 5,
    },
    hard: {
      rows: 4,
      cols: 4,
      maxNum: 1000,
      timing: 3,
    }
  }
  return config[difficulty]
}

export const useGame = defineStore('game', {
  state: () => ({
    matrix: [], // Initialize as an empty array
    currentNumber: 0,
    config: {
      rows: 0,
      cols: 0,
      maxNum: 0,
      timing: 0,
    },
    difficulty: 'hard',
  }),

  actions: {
    setDifficulty(difficulty) {
      if (!['easy', 'medium', 'hard'].includes(difficulty)) {
        throw new Error('Invalid difficulty')
      }

      this.config = getConfigBasedOnDifficulty(difficulty)
      localStorage.setItem('gameDifficulty', difficulty)
      this.difficulty = difficulty // Update the difficulty in the state
      this.generateNewNumber()

      // Initialize the matrix
      this.matrix = [] // Reset the matrix
      for (let i = 0; i < this.config.rows; i++) {
        this.matrix[i] = []
        for (let j = 0; j < this.config.cols; j++) {
          this.matrix[i][j] = {
            value: null,
            isRevealed: false,
            row: i,
            col: j,
          }
        }
      }
    },
    setGameDifficultyFromLocalStorage() {
      let difficulty = localStorage.getItem('gameDifficulty')
      if (difficulty) {
        this.difficulty = difficulty;
      } else {
        return 'hard'
      }
    },
    getDifficulty() {
      return this.difficulty
    },

    getCurrentNumber() {
      return this.currentNumber
    },

    generateNewNumber() {
      this.currentNumber = Math.floor(Math.random() * this.config.maxNum)
    },

    getMatrix() {
      return {
        matrix: this.matrix,
        rows: this.config.rows,
        cols: this.config.cols,
      }
    },

    setCell(i, j) {
      if (this.matrix[i][j].isRevealed) {
        return this.matrix
      }

      // Update the cell in the matrix
      this.matrix[i][j] = {
        ...this.matrix[i][j],
        value: this.currentNumber,
        isRevealed: true,
      }

      this.generateNewNumber()

      // Return the updated matrix if needed
      return this.matrix
    },

    isCellRevealed(i, j) {
      return this.matrix[i][j].isRevealed
    },

    getCellValue(i, j) {
      return this.matrix[i][j].value
    },

    getConfig() {
      return this.config
    },

    getCell(i, j) {
      return this.matrix[i][j]
    },
  },
})
