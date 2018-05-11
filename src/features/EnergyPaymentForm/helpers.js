function getCost() {
  var previous_value = 0; //Предыдущие значения счетчика
  var current_value = 0; // Показания счётчика на данный момент времени

  var price_low = 0.9; // Стоимость 100 киловатт и меньше
  var price_hight = 1.68; // Стоимостьпри потреблении больше ста киловатт
  var upperLimitPrice = 0;

  var current_count = current_value - $previous_value;

  if (current_count <= 100) {
    underLimitPrice = price_low * current_count;
  } else {
    upperLimitPrice = (current_count - 100) * price_hight;
    underLimitPrice = price_low * 100;
  }

  total_price = upperLimitPrice + underLimitPrice;

  console.log(total_price + current_count);
  return total_price;
}

export { getCost };