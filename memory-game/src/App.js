import React, { Component } from "react";
import PictureCard from "./components/PictureCard"
import logo from './logo.svg';
import './App.css';

// Import all files from given directory
function importAll(r) {
  return r.keys().map(r);
}

// use importAll to import all images and assign them to 'const images' as array
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
console.log(images);

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images
  };
  render() {
    return (
      <div>
        {this.state.images.map((image, i) => (
          <PictureCard
            id={image.id}
            // key={image.id}
            image={image}
          />
        ))}
      </div>
    );
  }
}

export default App;
