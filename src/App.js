import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>}></Route>
      <Route path="/home" element={<h1>Home</h1>}></Route>
      <Route path="/explore" element={<h1>Explore</h1>}></Route>
      <Route path="/*" element={<h1>Page not found</h1>}></Route>
    </Routes>
  );
}

export default App;
