// Card.jsx

import React from "react";
import { GoStarFill } from "react-icons/go";

function Card({ stay }) {
  const { photo, title, superHost, type, beds, rating } = stay;

  return (
    <div className="m-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3">
      <div className="card p-4 border rounded shadow-md" style={{ width: "410px", height: "320px" }}>
        <div className="card-image">
          <img src={photo} alt={title} className="w-full h-48 object-cover rounded" />
        </div>
        <div className="card-details mt-4">
          <div className="left-details mb-2">
            <div className="superhost-type-beds flex items-center">
              {superHost && (
                <button className="superhost-button">SUPER HOST</button>
              )}
              {beds ? (
                <p className="stay-type">{type} . {beds} beds</p>
              ) : (
                <p className="stay-type">{type}</p>
              )}
              <div className="rating flex items-center">
                <GoStarFill className="text-red-500" />
                {rating}
              </div>
            </div>
          </div>
          <h2 className="title">{title}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
