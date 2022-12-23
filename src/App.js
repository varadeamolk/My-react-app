import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <Link to={"/home"}>Home |</Link>
      <Link to={"/explore"}>Explore |</Link>
      <Link to={"/notifications"}>Notifications</Link>

      <Routes>
        <Route path="/home" element={<h1>Home</h1>}></Route>
        <Route path="/notifications" element={<h1>Notifications</h1>}></Route>
        <Route path="/explore" element={<h1>Explore</h1>}></Route>
        <Route path="/*" element={<h1>Page not found</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
