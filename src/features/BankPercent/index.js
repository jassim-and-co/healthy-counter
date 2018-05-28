import PrintObject from "../../components/PrintObject";
import React from "react";

var DB = {
  source: 10,
  depositTime: 20,
  yearDays: 365,
  rate: 10
};

function getAccount(source, rate, depositTime, yearDays) {
  var result = source * rate * depositTime / (yearDays * 100);
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

function updateRatePlus() {
  DB.rate = DB.rate + 1;
  DB.result = getAccount(DB.source, DB.rate, DB.depositTime, DB.yearDays);
}

function updateRateMinus() {
  DB.rate = DB.rate - 1;
  DB.result = getAccount(DB.source, DB.rate, DB.depositTime, DB.yearDays);
}

export default () => (
  <div>
    <h3>Change rate %</h3>

    <button onClick={updateRateMinus}> -1 %</button>
    <button onClick={updateRatePlus}> +1 %</button>

    <br />
    <br />
    <h3>View results</h3>
    <PrintObject data={DB} />
  </div>
);
