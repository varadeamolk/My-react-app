import { useState } from "react";
function App() {
  let title = "Map Demo";
  let [list, setList] = useState([]);
  let addItem = () => {
    // alternate :: No DOM PLZ!
    let textRef = document.querySelector("#textId1");
    // logical part
    let newList = [textRef.value, ...list];
    // dom part
    setList(newList);
  };
  return (
    <div>
      <h1> {title} </h1>
      <input type="text" name="" id="textId1" />
      <input type="button" value="Add Item Into List" onClick={addItem} />
      {list.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}

export default App;

// [delhi, mumbai] => [<h1>delhi</h1>, <h1>mumbai</h1>]