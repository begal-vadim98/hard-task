'use strict'

const DomElement = function (selector, title, position, height, width, bg, fontSize) {
  this.selector = selector,
    this.title = title,
    this.position = position,
    this.height = height,
    this.width = width,
    this.bg = bg,
    this.fontSize = fontSize
}

DomElement.prototype.createElement = function () {

  const element = document.createElement('div');

  switch (true) {

    case this.selector[0] === ".":
      element.classList.add(this.selector.slice(1));
      break;

    case this.selector[0] === "#":
      element.setAttribute('id', this.selector.slice(1));
      break;

  }
  element.style.cssText = `height: ${this.height}px;
                            width: ${this.width}px;
                            background-color: ${this.bg};
                            font-size: ${this.fontSize}px;
                            position: ${this.position};
                            border: 1px solid black;`

  element.textContent = this.title;

  document.body.append(element);
}
const elementOne = new DomElement('#box', 'Первый блок', 'relative', 500, 500, '#fff', 5);
const elementTwo = new DomElement('.squaer', ' ', 'absolute', 100, 100, 'red', 0);

elementOne.createElement();
elementTwo.createElement();




const muFuncSquare = function () {

  const squaer = document.querySelector('.squaer');
  const box = document.querySelector('#box');

  box.append(squaer);

  let top = 0,
    left = 0;

  const squaerDown = event => {

    const code = event.key;

    squaer.style.marginTop = top + 'px';
    squaer.style.marginLeft = left + 'px';


    if (code === 'ArrowUp' && top !== 0) return top -= 10;
    if (code === 'ArrowDown' && top <= box.clientHeight - squaer.offsetHeight) return top += 10;
    if (code === 'ArrowLeft' && left !== 0) return left -= 10;
    if (code === 'ArrowRight' && left <= box.clientWidth - squaer.offsetWidth) return left += 10;


  }

  document.addEventListener('keydown', squaerDown);
}


muFuncSquare();