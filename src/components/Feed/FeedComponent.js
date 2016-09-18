import React from 'react';
import ArticleItem from './ArticleItem';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 

class FeedComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <div className="container">
                <div className="col-md-9">
                    {Object.keys(this.props.Feed).map((key) => {return <ArticleItem key={key} i={key} item={this.props.Feed[key]} />})}
                </div>
                <div className="col-sm-3">
                    Right column
                </div>
            </div>
         </div>
        );
    }
}

export default FeedComponent;
