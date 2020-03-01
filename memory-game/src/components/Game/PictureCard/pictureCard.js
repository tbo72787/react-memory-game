import React from "react";

function PictureCard(props) {
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src={props.image} className="card-img-top" alt="{props.name}" onClick={props.onClick}/>
    </div>
  );
}

export default PictureCard;
