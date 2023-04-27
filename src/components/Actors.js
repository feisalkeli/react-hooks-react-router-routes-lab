import React from "react";
import { actors } from "../data";
import { Link } from "react-router-dom";

function Actors() {
  const act = actors;
  return (
    <div>
      {act.map((acting) => {
        return (
          <ul key={acting.id}>
            <Link to="/actors">
              {" "}
              <li>{acting}</li>
            </Link>
          </ul>
        );
      })}
    </div>
  );
}

export default Actors;
