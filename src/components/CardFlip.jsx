import React, { PureComponent } from 'react';
import './style.css'

export default class CardFlip extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { front, back } = this.props;

    return (
      <div className="flip-card"> 
        <div className="flip-card-inner">
          <div className="flip-card-front">
            {front}
          </div>
          <div className="flip-card-back">
            {back}
          </div>
        </div>
      </div>
    );
  }
}
