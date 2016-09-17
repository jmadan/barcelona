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
        this.props.getFeedFromServer(1);
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
