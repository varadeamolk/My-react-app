function App() {
  let title = "Map Demo";
  let user = { id: 1, city: "mumbai" };
  let list = ["mumbai", "delhi"];

  return (
    <div>
      <h1> {title} </h1>
      <h1>{user.city}</h1>

      {list.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}

export default App;

// [delhi, mumbai] => [<h1>delhi</h1>, <h1>mumbai</h1>]
