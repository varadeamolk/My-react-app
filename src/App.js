function App() {
  let mystyle = { color: "white", background: "purple" };

  return (
    <div>
      {/** This is kind of internal. Note: Only one curly braces. */}
      <h1 style={mystyle}>Hello World</h1>

      {/* THIS IS INLINE STYLING */}
      <h1 style={{ color: "white", backgroundColor: "red" }}>Hello</h1>
    </div>
  );
}

export default App;
