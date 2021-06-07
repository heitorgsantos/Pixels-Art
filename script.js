//Buscando variaveis da tabela//
const colorPaltte = document.querySelector('#color-palette');
let divColor = document.querySelectorAll('.color');
let pixel = document.querySelectorAll('.pixel');
const divPai = document.querySelector('#pixel-board');

for(let index = 0; index < divColor.length; index += 1){
  divColor[index].addEventListener('click',function(){
    
    let selectorColor = document.querySelector('.selected');
    selectorColor.classList.remove('selected');
    divColor[index].classList.add('selected');

    console.log(divColor[index]);
  })
  
}







function myFunction(){
  let theCssProp = window.getComputedStyle(selectorColor, null).getPropertyValue("background-color");
}
//colorPaltte.addEventListener('click', myFunction)