import React from 'react';
import ArticleItem from './ArticleItem';

class FeedComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <div className="container">
                <div className="col-md-9">
                    {this.props.Feed.map((f, i)=> <ArticleItem key={i} i={i} item={f} {...this.props}/>)}
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
