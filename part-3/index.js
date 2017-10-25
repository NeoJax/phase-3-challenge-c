function showModal() {
  document.getElementById('bookModalBG').style.display = '';
  const cost = this.parentNode.previousSibling.previousSibling;
  const capacity = cost.previousSibling.previousSibling;
  const room = capacity.previousSibling.previousSibling;
  document.getElementById('cost').innerHTML = cost.innerHTML;
  document.getElementById('room').innerHTML = room.innerHTML;
}

function updateTotal() {
  const nights = this.value;
  let cost = this.parentNode.childNodes[5].childNodes[0].innerHTML;
  cost = cost.slice(1);
  cost = parseFloat(cost);
  const total = cost * nights;
  document.getElementById('total').innerHTML = `$${total}`;
}

function hideModal() {
  document.getElementById('bookModalBG').style.display = 'none';
}

window.onload = function () {
  const buttons = document.getElementsByClassName("bookBtn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', showModal);
  }
  const numbers = document.getElementById('nights')
  numbers.addEventListener('change', updateTotal);
}
