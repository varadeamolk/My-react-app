/* function App() {
  return <h1>Hello</h1>;
}

export default App; */

/* function App() {
  return (
    <h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vero
      tempore ducimus voluptate ad aliquam, expedita deleniti, odio nesciunt
      voluptates officia ullam repellat quia repellendus! Autem, pariatur.
      Voluptas, eos iure.
    </h1>
  );
}

export default App; */

function App() {
  return (
    <div>
      <Person name="rahul" />
      <Person name="panvel" />
      <Person name="nashik" />
      <Person name="mumbai" />
      <Person name="pune" />
    </div>
  );
}

//person tag
function Person(name) {
  return (
    <div>
      <h1>Person name</h1>
      <img src="https://picsum.photos/400" alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        reiciendis modi eligendi blanditiis, nesciunt distinctio hic alias
        quisquam eaque sint voluptatibus molestias excepturi veniam. Reiciendis,
        omnis. Odio debitis fuga non?
      </p>
    </div>
  );
}
export default App;
