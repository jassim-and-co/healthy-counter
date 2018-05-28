import PrintObject from "../../components/PrintObject";
import React from "react";

var db = {
  source: 10,
  depositTime: 20,
  yearDays: 365,
  rate: 10,
  value: 0
};

function getValue(source, rate, depositTime, yearDays) {
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

function updateValue() {
  db.value = getValue(db.source, db.rate, db.depositTime, db.yearDays);
}

function updateRatePlus() {
  db.rate = db.rate + 1;
}

function updateRateMinus() {
  db.rate = db.rate - 1;
}

export default () => (
  <div>
    <h3>Change</h3>
    <button onClick={updateRatePlus}> Add 1 %</button>
    <button onClick={updateRateMinus}> Minus 1 %</button>
    <br />
    <h3>Update</h3>
    <button onClick={updateValue}>Update value</button>
    <br />
    <br />
    <PrintObject data={db} />
  </div>
);
