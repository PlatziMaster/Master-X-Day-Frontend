import React from 'react';

class Card extends React.Component {
  render() {
    const { icon, taskClassification, percentage } = this.props;
    return (
      <div className="card-container">
        <div className="percentage-container"> {percentage} %</div>
        <div className="icon-container">
          <img src={icon} alt="" className="icon" />
        </div>
        <div className="classification-container">
          {taskClassification}
        </div>
      </div>
    );
  }
}

export default Card;
