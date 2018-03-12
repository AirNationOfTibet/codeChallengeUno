$( document ).ready(readyNow);

let numberClicked = 0;

function readyNow(){
  console.log('hello');
  $('#masterButton').on('click', createBlocks);
  $('#bodyContent').on('click','.swap', swapColor);
  $('#bodyContent').on('click', '.delete', eraseParent);
}

function createBlocks(){
  numberClicked ++;
  $('#bodyContent').append('<div class = "creation"><p>' + numberClicked + '</p>' + '<button class="swap">swap</button>' + '<button class= "delete">delete</button></div>');

}

function swapColor(){
  $(this).parent().toggleClass('bgcooler');
}

function eraseParent(){
  $(this).parent().remove();
}
