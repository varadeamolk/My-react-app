import { useState } from "react";

function App() {
  let [theme, setTheme] = useState("primary");
  let [list] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1]);

  let makePrimaryTheme = () => {
    theme = "primary";

    setTheme(theme);
  };

  let makeSuccessTheme = () => {
    theme = "success";

    setTheme(theme);
  };

  let makeDangerTheme = () => {
    theme = "danger";

    setTheme(theme);
  };
  return (
    <div>
      <h1 className={`bg-${theme} text-light p-2`}>Bootstrap styling</h1>

      <input
        className="btn btn-primary btn-sm me-1"
        type="button"
        value="Primary Theme"
        onClick={makePrimaryTheme}
      />
      <input
        className="btn btn-success btn-sm me-1"
        type="button"
        value="Success Theme"
        onClick={makeSuccessTheme}
      />
      <input
        className="btn btn-danger btn-sm me-1"
        type="button"
        value="Danger Theme"
        onClick={makeDangerTheme}
      />

      {list.map((item) => (
        <div className={`alert alert-${theme} my-2`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sunt
          consequatur et vel sint, nihil ipsum, a, aperiam accusantium
          repudiandae facilis exercitationem quasi quas mollitia maxime
          molestiae veritatis! Voluptatum, odio.
        </div>
      ))}
    </div>
  );
}

export default App;
