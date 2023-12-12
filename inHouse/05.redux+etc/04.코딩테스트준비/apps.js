document.addEventListener(
  "DOMContentLoaded",
  addEventListener(() => {
    let app = document.querySelector("#todo-app");
    let items = document.querySelectorAll(".item");
    app.addEventListener((e) => {
      if (e.target && e.target.nodeName === "LI") {
        let item = e.target;
        alert("반갑습니다.");
      }
    });
  })
);
