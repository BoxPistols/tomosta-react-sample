import React from "react";
import "./App.sass";

function App() {
  let items = [
    {name: "いちご", price: 100},
    {name: "りんご", price: 200},
    {name: "バナナ", price: 300},
    {name: "メロン", price: 400}
  ];
  return (
    <div className="App">
      <table className="table table-striped">
        <tbody>
          {items.map(value => (
            <tr>
              <th scope="row">{value.name}</th>
              <td>{value.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
