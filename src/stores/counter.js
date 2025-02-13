import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    coins: parseInt(localStorage.coins),
  }),
  actions: {},
})