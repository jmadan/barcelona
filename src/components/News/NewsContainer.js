import React from 'react';
import NewsFeed from './NewsFeed';

class NewsContainer extends React.Component {
    contructor() {
        super();
        this.state = { news: [] }
    }

    render() {
        return (<NewsFeed news={this.state.news}/>);
    }
}
