import PrintObject from "../../components/PrintObject";
import React from "react";

function account(sourceMoney, Rate, depositTime, yearDays) {
  var result = sourceMoney * Rate * depositTime / (yearDays * 100);
  var depositMoney = result;
  if ((depositMoney !== 0) & (depositMoney < 100000)) {
    add();
    function add() {
      var finalRateMoney = depositMoney * Rate * depositTime / (yearDays * 100);
      console.log("Сумма от процентов: " + finalRateMoney);
      return finalRateMoney;
    }
  }
  return result;
}

export default () => <div>Bank</div>;
