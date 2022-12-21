import { useState } from "react";

function App() {
  let [theme, setTheme] = useState("primary");

  // Member function
  let updateTheme = (p1 = "primary") => {
    theme = p1;

    setTheme(theme);
  };

  return (
    <div>
      <h1 className={`bg-${theme} text-light p-2`}>Bootstrap styling</h1>

      <input
        className="btn btn-primary btn-sm me-1"
        type="button"
        value="Primary Theme"
        //onClick={updateTheme}
        onClick={() => updateTheme("primary")}
      />
      <input
        className="btn btn-success btn-sm me-1"
        type="button"
        value="Success Theme"
        // onClick={updateTheme}
        onClick={() => updateTheme("success")}
      />
      <input
        className="btn btn-danger btn-sm me-1"
        type="button"
        value="Danger Theme"
        // onClick={updateTheme}
        onClick={() => updateTheme("danger")}
      />
    </div>
  );
}

export default App;
