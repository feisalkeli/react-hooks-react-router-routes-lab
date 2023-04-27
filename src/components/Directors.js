import React from "react";
import { directors } from "../data";
import { Link } from "react-router-dom";

function Directors() {
  return (
    <div>
      {directors.map((dir) => {
        return (
          <ul key={dir.key}>
            <li>
              <Link to="directors">{dir}</Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Directors;
