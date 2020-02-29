import React, { Component } from "react";
import PictureCard from "./components/PictureCard"
// import handleClick from "./components/PictureCard"
import './App.css';

const convertedImageArray = [];

// Import all files from given directory
function importAll(r) {
  return r.keys().map(r);
}

// use importAll to import all images and assign them to 'const images' as array
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
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


class App extends Component {
  constructor(props) {
    super(props);

  // Setting this.state.friends to the friends json array
  this.state = {
    images,
    clicked: [],
    convertedImageArray
  };

  this.handleImageClick = this.handleImageClick.bind(this);
  };


  handleImageClick(event) {
    console.log(this);
    this.refs.pictureHandleClick.handleClick();
  }

  render() {
    return (
      <div>
        {this.state.convertedImageArray.map((image, i) => (
          <PictureCard
          // Attach ref to Picture
            ref="pictureHandleClick"
            key={i}
            image={image.href}
            onClick={this.handleImageClick}
          />
        ))}
      </div>
    );
  }
}

export default App;
