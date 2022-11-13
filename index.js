const el = document.getElementById("el");
let arr = [];
function flexCollector(i) {
  if (i) {
    if (!i.classList.contains("break")) {
      if (i.classList.contains("flex")) {
        arr.push(i);
      }
      flexCollector(i.parentElement);
    }
  }
}
flexCollector(el);
console.log(arr);
