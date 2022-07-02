const colorPaltte = document.querySelector('#color-palette');
const divColor = document.querySelectorAll('.color');
const divPai = document.querySelector('#pixel-board');

for (let index = 0; index < divColor.length; index += 1) {
  divColor[index].addEventListener('click', () => {
    const selectColor = document.querySelector('.selected');
    selectColor.classList.remove('selected');
    divColor[index].classList.add('selected');
    console.log(divColor[index]);
  });
}

function paintPixel() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', () => {
      const selectColor = document.querySelector('.selected');
      const paintColor = window
        .getComputedStyle(selectColor, null)
        .getPropertyValue('background-color');
      pixel[index].style.backgroundColor = paintColor;
    });
  }
}
paintPixel();

const clearButtom = document.createElement('button');
clearButtom.id = 'clear-board';
clearButtom.innerHTML = 'Limpar';
divPai.appendChild(clearButtom);
