import React from 'react';

const formatName = name => (
  window.config.stripOrgs ? name.substring(name.indexOf('/') + 1, name.length) : name
);

class Summary extends React.Component {
  constructor() {
    super();
    this.state = {
      intervalId: null,
      projectIndex: 0,
    };
  }

  componentDidMount() {
    const intervalId = setInterval(this.tick.bind(this), 3000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  tick() {
    const newIndex = (this.state.projectIndex + 1) % this.props.projects.length;
    this.setState({
      projectIndex: newIndex,
    });
  }

  renderDetails() {
    const { projects } = this.props;
    const { projectIndex: index } = this.state;

    if (!projects.length) {
      return null;
    }

    return formatName(projects[index].name);
  }

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
          {this.renderDetails()}
        </div>
      </div>
    );
  }
}

export default Summary;
