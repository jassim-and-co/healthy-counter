import PrintObject from "../../components/PrintObject";

import React from "react"; // Object
var db = {
  cup: 0,
  dbName: "Espresso"
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
      <h3>ShowCups</h3>
      <p>
        <button onClick={showData}> ShowCups </button>
      </p>
      <h3>Massage</h3>
      <p>
        <button onClick={msg}> Message </button>
      </p>
      <h3>Reset</h3>
      <p>
        <button onClick={rst}>Reset </button>
      </p>
      <h3>Db</h3>
      <PrintObject data={db} />
    </div>
  </div>
);
