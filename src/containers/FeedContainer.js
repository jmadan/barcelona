import React from 'react';
import FeedComponent from '../components/Feed/FeedComponent';

class FeedContainer extends React.Component {
    constructor() {
        super();
        // this.state = {
        //     Feed: []
        // }
    }

    componentDidMount() {
        //make api call here
        // this.setState({ Feed: Feed });
    }

    render() {
        return (
            <div>
            <FeedComponent {...this.props}/>
        </div>
        );
    }
}

export default FeedContainer;
