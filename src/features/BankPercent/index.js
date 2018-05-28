import PrintObject from "../../components/PrintObject";
import React from "react";

var db = {};

function account(sourceMoney, rate, depositTime, yearDays) {
  var result = sourceMoney * rate * depositTime / (yearDays * 100);
  var depositMoney = result;
  if ((depositMoney !== 0) & (depositMoney < 100000)) {
    add();
    function add() {
      var finalRateMoney = depositMoney * rate * depositTime / (yearDays * 100);
      console.log("Сумма от процентов: " + finalRateMoney);
      return finalRateMoney;
    }
  }
  return result;
}

export default () => (
  <div>
    <PrintObject data={db} />
  </div>
);
