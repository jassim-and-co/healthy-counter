import React from "react";
var db = {
  cup: 0
};

function click() {
  db.cup = db.cup + 1;
}

function showData() {
  console.log(db);
}

function msg() {
  alert(db.cup);
}

function rst() {
  db.cup = 0;
}

export default () => (
  <div>
    <div>
      <p>Количество чашек кофе</p>
      <h3>EspressoCup</h3>
      <p>
        <button onClick={click}> EspressoCup </button>
      </p>
      <p>
        <h3>ShowCups</h3>
        <button onClick={showData}> ShowCups </button>
      </p>
      <p>
        <h3>Massage</h3>
        <button onClick={msg}> Message </button>
      </p>
      <p>
        <h3>Reset</h3>
        <button onClick={rst}>Reset </button>
      </p>
    </div>
  </div>
);
