import React from 'react';

class Overlay extends React.PureComponent {
  render() {
    const { title, subtitle } = this.props;

    return (
      <div className="overlay">
        <div className="overlay-wrapper">
          <div className="overlay-title">{title}</div>
          <div className="overlay-subtitle">{subtitle}</div>
        </div>
      </div>
    );
  }
}

export default Overlay;
