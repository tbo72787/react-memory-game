import React, { Component } from "react";
import PictureCard from "./PictureCard/pictureCard"
import '../../App.css';

const convertedImageArray = [];

// Import all files from given directory
function importAll(r) {
  return r.keys().map(r);
}

// use importAll to import all images and assign them to 'const images' as array
const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));
console.log(images);
convertImages(images);

function convertImages(images) {
  images.map((image, i) => {
    convertedImageArray.push(
      {
        key: i,
        href: image
      }
    )
  })
  console.log(convertedImageArray)
}

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images,
      clicked: [],
      convertedImageArray
    };
  };

  handleImageClick(i)  {
    console.log(i)
  }
  render() {
    return (
      <div>
        {this.state.convertedImageArray.map((image, i) => (
          <PictureCard
            key={i}
            image={image.href}
            onClick={() => this.handleImageClick(i)}
          />
        ))}
      </div>
    );
  }

}

export default Game;