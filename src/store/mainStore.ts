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
      const tipAmount = Number.parseFloat(
        ((this.bill * (this.tip / 100)) / this.people).toFixed(2),
      );
      return this.isEmpty || !isFinite(tipAmount) ? 0 : tipAmount;
    },
    totalAmount(): number {
      const totalAmount = Number.parseFloat(
        (this.bill / this.people + this.tipAmount).toFixed(1),
      );
      return this.isEmpty || !isFinite(totalAmount) ? 0 : totalAmount;
    },
  },
});

export default useStore;
