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
    tipAmount: ({ tip, bill, people }) => (bill * (tip / 100)) / people,
    totalAmount(): number {
      return this.bill / this.people + this.tipAmount;
    },
  },
});

export default useStore;
