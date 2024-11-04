import { createRouter, createWebHistory } from 'vue-router'
import MainMenu from '@/views/MainMenu.vue'
import Game from '@/views/Game.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'mainMenu',
      path: '/',
      component: MainMenu
    },
    {
      name: 'game',
      path: '/game',
      component: Game
    }
  ],
})

export default router
