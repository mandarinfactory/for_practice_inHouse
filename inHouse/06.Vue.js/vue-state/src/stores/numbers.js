import { defineStore } from "pinia";

export const useNumbersStore = defineStore("numbers", {
  state: () => {
    return {
      numbers: [13, 23, 35, 42, 51, 69, 70, 28, 19],
    };
  },
  actions: {
    addNumber(num) {
      this.numbers.push(num);
    },
  },
  getters: {
    doubleNumber: (state) => {
      return state.numbers.map((num) => num * 2);
    },
    filterNumber: (state) => {
      return (minNum) => state.numbers.filter((num) => num >= minNum);
    },
  },
});
