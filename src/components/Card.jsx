import React, { PureComponent } from 'react';
import './style.css'

export default class Card extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { content } = this.props;

    return (
      <div className="flip-card"> 
          <div className="flip-card-front">
            {content}
          </div>
        </div>
    );
  }
}
