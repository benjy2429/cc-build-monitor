import React from 'react';
import fetchData from '../providers/circleci.js';

export default Component => (
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
                data: {}
            };
        }

        componentDidMount() {
            fetchData().then(data => {
                this.setState({ loading: false, data });
            });
        }

        render() {
            const { loading, data } = this.state;

            return loading ?
                <div>Loading...</div> :
                <Component {...this.props} data={data} />;
        }
    }
);
