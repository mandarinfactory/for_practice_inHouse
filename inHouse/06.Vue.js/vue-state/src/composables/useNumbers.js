import { ref } from "vue";

export default function () {
  const numbers = ref([13, 23, 35, 42, 51, 69, 70, 28, 19]);

  const addNumber = (num) => {
    numbers.value.push(num);
  };

  const filterNumber = (minNum) => {
    return numbers.value.filter((num) => num >= minNum);
  };

  return {
    numbers,
    addNumber,
    filterNumber,
  };
}
