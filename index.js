let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save");
let dash = " - ";

function increment() {
  count = count + 1;
  console.log(count);
  countEl.innerHTML = count;
}

function save() {
  saveEl.textContent += dash + count;
  countEl.textContent = 0
  count = 0
}
