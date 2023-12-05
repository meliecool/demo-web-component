document.addEventListener('DOMContentLoaded', onLoad, true);

class PopUpInfo extends HTMLElement {
  constructor() {
    super();

    const ghost = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('span');
    const icon = document.createElement('span');
    icon.setAttribute('class', 'icon');
    icon.setAttribute('tabindex', 0);
    const info = document.createElement('span');
    info.setAttribute('class', 'info');

    const text = this.getAttribute('text');
    info.textContent = text || 'Je suis un text informatif placeholder';

    let imgUrl;
    if (this.hasAttribute('img')) {
      imgUrl = this.getAttribute('img');
    } else {
      imgUrl =
        'https://www.news10.com/wp-content/uploads/sites/64/2022/07/Cat.jpg?w=2560&h=1440&crop=1';
    }
    const img = document.createElement('img');
    img.src = imgUrl;
    icon.appendChild(img);

    const style = document.createElement('style');

    style.textContent = `
    :host {
      position: relative;
    }

    .info {
      font-size: 0.8rem;
      width: 200px;
      display: inline-block;
      border: 1px solid black;
      padding: 10px;
      background: white;
      border-radius: 5px;
      opacity: 0;
      transition: 0.6s all;
      position: absolute;
      bottom: 20px;
      left: 10px;
      z-index: 3;
    }

    img {
      width: 500px;
    }

    .icon:hover + .info, .icon:focus + .info {
      opacity: 1;
    }`;

    ghost.appendChild(style);
    ghost.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}

function onLoad() {
  customElements.define('popup-info', PopUpInfo);
}
