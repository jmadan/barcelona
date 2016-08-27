import React from 'react';
import News from './News';

class NewsFeed extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
        	<div className="page-header text-muted">Story Feed</div>
                {this.props.newsFeed.map((news, i) => <News {...this.props} key={i} i={i} news={news} />)}
        	</div>
        );
    }
}

export default NewsFeed;
