for (let i = 0; i < 25; i++) {
  const random = Math.floor(Math.random() * 100)
  const cellColor = (i % 2) ? 'middle' : ''

  document.querySelector('.scopeHidden > ul').innerHTML += `
    <li class="${cellColor}">${random}</li>
  `;
}

function start() {
  const move = -150 * 15;
  const elm = (str) => document.querySelector(str);
  const elms = (str) => document.querySelectorAll(str);

  elm('.scopeHidden > ul').style.left = move + 'px';

  const index = -Math.floor((move + (elm('.scopeHidden').offsetWidth / 2) / -150) / 150) + 1

  elms('.scopeHidden > ul > li')[index].style.background = 'red';
}