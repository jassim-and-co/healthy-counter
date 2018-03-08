export function vitaminC(orangeWeight, kiwiWeight, appleWeight) {
  var orange = 60 / 100; //содержание витамина С в 1г. фрукта
  var kiwi = 90 / 100; //содержание витамина С в 1г. фрукта
  var apple = 10 / 100; // содержание витамина С в 1г. фрукта

  var weightSum = orangeWeight + kiwiWeight + appleWeight; //суммарный вес всех фруктов

  var vitaminSum = orangeWeight * orange + kiwiWeight * kiwi + appleWeight * apple;
  // суммарное содержание витамина С во всех фруктах

  return vitaminSum; //суммарное содержание витамина С во всех фруктах
}

export function vitaminPrice(orangeWeight, kiwiWeight, appleWeight) {
  var orangePrice = 26; //стоимость 1000г.фрукта в грн.
  var kiwiPrice = 60; //стоимость 1000г.фрукта грн.
  var applePrice = 27; //стоимость 1000г.фрукта грн.

  var orangePayment = orangeWeight * orangePrice; //стоимость данного фрукта в зависимости от веса
  var kiwiPayment = kiwiWeight * kiwiPrice; //стоимость данного фрукта в зависимости от веса
  var applePayment = appleWeight * applePrice; //стоимость данного фрукта в зависимости от веса

  var weightSum = orangeWeight + kiwiWeight + appleWeight; //суммарный вес всех фруктов

  var paymentResult = orangePayment + kiwiPayment + applePayment; //итоговая стоимость всех фруктов в зависмости от веса

  return paymentResult;
}
