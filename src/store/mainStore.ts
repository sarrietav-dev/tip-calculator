import { defineStore } from 'pinia';

const useStore = defineStore('main', {
  state: () => {
    return {
      bill: 0,
      tip: 0,
      people: 0,
    };
  },
  getters: {
    isEmpty: ({ tip, bill, people }) => bill === 0 || tip === 0 || people === 0,
    tipAmount(): number {
      return this.isEmpty
        ? 0
        : Number.parseFloat(
            ((this.bill * (this.tip / 100)) / this.people).toFixed(2),
          );
    },
    totalAmount(): number {
      return this.isEmpty
        ? 0
        : Number.parseFloat(
            (this.bill / this.people + this.tipAmount).toFixed(1),
          );
    },
  },
});

export default useStore;
