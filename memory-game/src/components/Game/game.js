import React, { Component } from "react";
import PictureCard from "./PictureCard/pictureCard";
import Nav from "./Nav/nav"
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
      convertedImageArray,
      score: 0,
      topScore: 0,
      correct:"Click an image to begin!"
    };
  };

  handleImageClick(i)  {
    console.log(this)
    console.log(this.state.clicked)
    if (!this.state.clicked.includes(i)) {
      return (
        this.setState(prevState => ({
          clicked: [...prevState.clicked, i]
        })),
        this.setState({score: this.state.score + 1}),
        this.setState({correct: "You guessed correctly!"}),
        console.log("ifstate" + this.state.clicked),
        console.log("ifscore" + this.state.score)
  
      )
    } 
    else {
      console.log("elsestatebefore" + this.state.clicked)
      if (this.state.topScore < this.state.score) {
        this.setState({topScore: this.state.score})
      };
      return (
        this.setState({score: 0}),
        this.setState({clicked: []}),
        this.setState({correct: "You guessed incorrectly!"}),
        console.log("elsestate" + this.state.clicked),
        console.log("elsescore" + this.state.score)
      )
    }
    console.log(this.state.clicked)
    console.log(this.state.score)
  }
  render() {
    return (
      <div>
        <Nav
          score={this.state.score}
          topScore={this.state.topScore}
          correct={this.state.correct}
        />
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