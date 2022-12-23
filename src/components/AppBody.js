import { useState } from "react";

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

export default AppBody;
