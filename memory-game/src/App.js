import React, { Component } from "react";
import PictureCard from "./components/PictureCard"
// import handleClick from "./components/PictureCard"
import './App.css';

// Import all files from given directory
function importAll(r) {
  return r.keys().map(r);
}

// use importAll to import all images and assign them to 'const images' as array
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
console.log(images);

class App extends Component {
  constructor(props) {
    super(props);

  // Setting this.state.friends to the friends json array
  this.state = {
    images,
    clicked: []
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
        {this.state.images.map((image, i) => (
          <PictureCard
          // Attach ref to Picture
            ref="pictureHandleClick"
            id={image.id}
            key={image.id}
            image={image}
            name={image.name}
            onClick={this.handleImageClick}
          />
        ))}
      </div>
    );
  }
}

export default App;
