import React from "react";
import { GoStarFill } from "react-icons/go";

function Card({ stay }) {
  const { photo, title, superHost, type, beds, rating } = stay;

  return (
    <div className="marjen">
      <div className="card">
        <div className="card-image">
          <img src={photo} alt={title} />
        </div>
        <div className="card-details">
          <div className="left-details">
            <div className="superhost-type-beds">
              {superHost && (
                <button className="superhost-button">SUPER HOST</button>
              )}
              {beds ? (
                <p className="stay-type">
                  {type} . {beds} beds
                </p>
              ) : (
                <p className="stay-type">{type}</p>
              )}

              <div className="rating">
                {<GoStarFill style={{ color: "red" }} />}
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