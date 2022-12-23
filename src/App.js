import { useState } from "react";

function App() {
  return (
    <div>
      <AppHeader />
      <AppBody />
      <AppBody />
      <AppFooter />
    </div>
  );
}

// <AppHeader />
function AppHeader() {
  return (
    <div className="bg-warning text-light p-1">
      <h1>Shopping App</h1>
    </div>
  );
}

function AppBody() {
  let [list] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);
  return (
    <div>
      <div className="row">
        {list.map((item, index) => (
          <div className="col-12 col-md-3 my-2" key={index}>
            <div className="card">
              <img
                src={`http://picsum.photos/${200 + index}`}
                style={{ height: "300px", objectFit: "cover" }}
                alt=""
              />
              <div className="card-header">Shoping Card</div>
              <div className="card-body m">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                asperiores libero minima delectus ducimus sint officia nihil non
                modi quos, ut laborum illo velit magni hic consequatur ipsam
                incidunt Lorem ipsum dolor sit amet consectetur, adipisicing
                elit.
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AppFooter() {
  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100px ", background: "lightblue" }}
      >
        showing@pp............
      </div>
    </div>
  );
}

export default App;
