const products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

products.forEach((e) => {
  const divCol = `<div class='col-sm-4'>
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${e.title}</h5>
      <p>가격 : ${e.price}</p>
      <button class="buy">구매</button>
      </div>`;
  document.querySelector(".row").insertAdjacentHTML("beforeend", divCol);
}); // 더보기

document.querySelector(".price").addEventListener("click", () => {
  products.sort((a, b) => a.price - b.price);
  document.querySelector(".row").innerHTML = "";
  products.forEach((e) => {
    const divCol = `<div class='col-sm-4'>
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${e.title}</h5>
        <p>가격 : ${e.price}</p>
        <button class="buy">구매</button>
        </div>`;
    document.querySelector(".row").insertAdjacentHTML("beforeend", divCol);
  });
}); // 가격순정렬

document.querySelector(".hangel-high").addEventListener("click", () => {
  products.sort((a, b) => {
    if (a.title > b.title) return 1;
    else if (b.title > a.title) return -1;
    else return 0;
  });
  document.querySelector(".row").innerHTML = "";
  products.forEach((e) => {
    const divCol = `<div class='col-sm-4'>
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${e.title}</h5>
        <p>가격 : ${e.price}</p>
        <button class="buy">구매</button>
        </div>`;
    document.querySelector(".row").insertAdjacentHTML("beforeend", divCol);
  });
}); // 오름차순정렬

document.querySelector(".hangel-low").addEventListener("click", () => {
  products.sort(function (a, b) {
    if (a.title > b.title) return -1;
    else if (b.title > a.title) return 1;
    else return 0;
  });
  document.querySelector(".row").innerHTML = "";
  products.forEach((e) => {
    const divCol = `<div class='col-sm-4'>
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${e.title}</h5>
        <p>가격 : ${e.price}</p>
        <button class="buy">구매</button>
        </div>`;
    document.querySelector(".row").insertAdjacentHTML("beforeend", divCol);
  });
}); // 내림차순정렬

document.querySelector(".less").addEventListener("click", () => {
  let products1 = products.filter((v) => v.price <= 50000);
  document.querySelector(".row").innerHTML = "";
  products1.forEach((e) => {
    const divCol = `<div class='col-sm-4'>
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${e.title}</h5>
        <p>가격 : ${e.price}</p>
        <button class="buy">구매</button>
        </div>`;
    document.querySelector(".row").insertAdjacentHTML("beforeend", divCol);
  });
}); // 50000원 이하만

document.querySelectorAll(".buy").forEach((v) => {
  v.addEventListener("click", () => {
    let titles = v.previousElementSibling
    titles = titles.previousElementSibling
    titles = titles.previousSibling
    titles = titles.nextSibling.innerHTML
    if(localStorage.getItem('cart') != null) {
        let getCart = JSON.parse(localStorage.cart)
        getCart.push(titles)
        localStorage.setItem('cart', JSON.stringify(getCart))
    } else {
        localStorage.setItem('cart', JSON.stringify([titles]))
    }
    let getTitles = localStorage.getItem('cart')
    getTitles = JSON.parse(getTitles)
  });
});

let arr = [7, 5, 6, 3, 4, 1, 90, 20];
arr.sort(function (a, b) {
  return a - b;
});
console.log(arr); // [1, 3, 4, 5, 6, 7, 20, 90]
/* 
  1. a,b는 arr 안의 자료
  2. return값이 오른쪽이 양수면 a를 오른쪽으로 옮긴다. (sort)
  3. return값이 오른쪽이 음수면 b를 오른쪽으로 옮긴다. (sort)
  sort는 원본을 변형해서 출력한다.
  */

// filter --> 원본에 변형없이 새로운 배열을 출력한다. //
let arr2 = arr.filter(function (a) {
  return a < 4;
});
console.log(arr2); // [1, 3]
// map --> 배열 자료 전부 변형시킨다. //
let arr3 = arr.map(function (a) {
  return a * 3;
});
console.log(arr3); // [3, 9, 12, 15, 18, 21, 60, 270]
