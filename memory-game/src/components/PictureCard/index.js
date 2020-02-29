import React, {Component} from "react";
import "./style.css";

class PictureCard extends Component {
  constructor(props) {
    super(props);

  this.state = {
    clicked: false
  };
  this.handleClick = this.handleClick.bind(this);
};
  handleClick() {
    console.log(this)
    const newState = { ...this.state };
    newState.clicked = true;
    this.setState(newState)
    console.log(this.state)
  }
  render() {
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src={this.props.image} className="card-img-top" alt={this.props.name} onClick={this.props.onClick}/>
    </div>
  );
};
};

export default PictureCard;
