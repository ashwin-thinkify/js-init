import selectors from "../constants/selectors";

function load(url, element) {
  fetch(url).then((res) => {
      console.log('res',res);
    element.innerHTML = res;
  });
}
export default class Form {
  constructor(id = "1") {
    this.id = id;
  }

  init() {
    console.log("Testing...", this.id);
    // load("../../htmls/main.html", document.querySelector(selectors.ID.MAIN));
  }
}
