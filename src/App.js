import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <Link to={"/home"}>Home |</Link>
      <Link to={"/explore"}>Explore |</Link>
      <Link to={"/notifications"}>Notifications</Link>

      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/notifications" element={<Notifications />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>I am Home</h1>
    </div>
  );
}

function Notifications() {
  return (
    <div>
      <h1>I have Notifications</h1>
    </div>
  );
}

function Explore() {
  return (
    <div>
      <h1>I am Explore</h1>
    </div>
  );
}

function PageNotFound() {
  return (
    <div>
      <h1>Page is not available</h1>
    </div>
  );
}

export default App;
