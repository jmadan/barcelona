import React from 'react';
import { Link } from 'react-router';

class LikeDislike extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-3">
                <ul className="list-inline">
                    <li><button onClick={this.props.likeAStory.bind(null, this.props.item.storyId)}><i className="fa fa-heart fa-2x" aria-hidden="true"></i></button></li>
                    <li><i className="fa fa-meh-o fa-2x" aria-hidden="true"></i></li>
                </ul>    
            </div>
        );
    }
}

export default LikeDislike;
