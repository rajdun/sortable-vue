import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGreetings  = defineStore('greetings', () => {
  const greetings = ref(
    [
    "Have a nice day!",
      "Are you lucky today?",
      "Hey, smile for me :)",
      "How's the weather today?",
      "You're looking good!",
      "Spread some kindness today.",
      "It's a brand new day!",
      "Coffee or tea?",
      "You've got this!",
      "You're stronger than you think.",
      "Take a moment for yourself.",
      "Happiness looks good on you.",
      "What's something you're grateful for?",
      "Feeling creative today?",
      "Laughter is the best medicine.",
      "Today's a gift just for you.",
      "Be your own sunshine.",
      "How's your day going?",
      "Sending you positive vibes!",
      "Life is full of possibilities.",
      "Don't forget to breathe.",
      "Feeling lucky? Why or why not?",
      "Hope you're doing well.",
      "Find joy in the little things.",
      "Keep that chin up!",
      "What's your favorite color?",
      "Do something that makes you happy.",
      "Live in the moment.",
      "You're never alone.",
      "Choose happiness.",
      "You're a rockstar!",
      "Reach for the stars.",
      "Who inspires you?",
      "Good times are ahead.",
      "Love yourself.",
      "Dance like no one's watching.",
      "What's your favorite song?",
      "You make the world a better place.",
      "Sing your heart out.",
      "Do you believe in magic?"
    ]);

  /**
   *
   * @returns {string} A random greeting from the greetings array
   */
  function getRandomGreeting() {
      return greetings.value[Math.floor(Math.random() * greetings.value.length)];
    }

    return { getRandomGreeting }
})
