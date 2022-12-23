import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Notifications from "./components/Notifications";
import Explore from "./components/Explore";
import PageNotFound from "./components/PageNotFound";
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

export default App;
