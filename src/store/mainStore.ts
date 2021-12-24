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
    tipAmount: ({ tip, bill, people }) =>
      Number.parseFloat(((bill * (tip / 100)) / people).toFixed(2)),
    totalAmount(): number {
      return Number.parseFloat(
        (this.bill / this.people + this.tipAmount).toFixed(1),
      );
    },
  },
});

export default useStore;
