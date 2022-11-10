import { defineStore } from 'pinia';

export const useCounterStore = defineStore("counter", {
    // Изначальное состояние переменной
    state: () => ({
        count: 0
    }),
    actions: {
       minus() {
           this.count--;
       },
        plus() {
            this.count++;
        },
        randomizeCounter() {
           this.count = Math.round(100 * Math.random())
        }
    }

});