import React from 'react';

class Summary extends React.PureComponent {
  render() {
    const { projects, category } = this.props;

    if (!projects.length) {
      return null;
    }

    return (
      <div className={`summary summary-${category}`}>
        <div className="summary-heading">
          {projects.length} {category}
        </div>
        <div className="summary-details">
          {projects[0].name}
        </div>
      </div>
    );
  }
}

export default Summary;
