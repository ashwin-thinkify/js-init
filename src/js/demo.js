import Form from './controller/Form';

const demo = () => 'Webpack Boilerplate ';

// eslint-disable-next-line no-console
console.log(demo());

window.onload = () => {
  const Former = new Form();
  function gameLoop() {
    Former.init();
  }

  gameLoop();
};
