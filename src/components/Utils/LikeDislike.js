import React from 'react';
import { Link } from 'react-router';

class LikeDislike extends React.Component {
    constructor(props) {
        super(props);
    }

    handleLike(id) {
        console.log("storyid****", id);
    }

    render() {
        return (
            <div className="col-md-3">
                <ul className="list-inline">
                    <li><button onClick={this.handleLike.bind(this, this.props.id)}><i className="fa fa-heart fa-2x" aria-hidden="true"></i></button></li>
                    <li><i className="fa fa-meh-o fa-2x" aria-hidden="true"></i></li>
                </ul>    
            </div>
        );
    }
}

export default LikeDislike;
