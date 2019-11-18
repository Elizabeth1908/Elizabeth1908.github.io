var updateTimer = function() {
  var quantity = document.getElementById('quantity');
  var count = Number(quantity.innerHTML);

  quantity.innerHTML = count += 1;

};

setInterval(updateTimer, 300);