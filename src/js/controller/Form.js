import SELECTORS from '../constants/selectors.constants';
import html from '../../htmls/main.html';

export default class Form {
  constructor(id = '1') {
    this.id = id;
  }

  init() {
    console.log('Testing...', this.id, html);
    document.querySelector(SELECTORS.ID.MAIN).innerHTML = html;
    // load("../../htmls/main.html", );
  }
}
