import React from "react"
import PicturCard from "../PictureCard/pictureCard.js"
import PictureCard from "../../PictureCard/index.js"

function PictureCardGrid(props) {
  return(
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <PictureCard>
          </PictureCard>
        </div>
      </div>
    </div>
  )
}