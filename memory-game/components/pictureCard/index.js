import React from "react";
import "./style.css";

function PictureCard(props) {
  return (
    <div className="card" style="width: 18rem;">
  <img src={props.image} className="card-img-top" alt={props.name}/>
</div>
  );
};

export default pictureCard;
