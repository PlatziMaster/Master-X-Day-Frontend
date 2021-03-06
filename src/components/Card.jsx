import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="card-container">
        <div className="percentage-container">20%</div>
        <div className="icon-container">
          <img src={this.props.icon} alt="" className="icon"></img>
        </div>
        <div className="classification-container">
          {this.props.taskClassification}
        </div>
      </div>
    );
  }
}

export default Card;
