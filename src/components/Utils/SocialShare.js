import React from 'react';
import { Link } from 'react-router';

class SocialShare extends React.Component {
    render() {
        return (
            <div className="col-md-4 col-md-offset-5">
                <ul className="list-inline">
                    <li><i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i></li>
                	<li><i className="fa fa-google-plus-square fa-2x" aria-hidden="true"></i></li>
                    <li><i className="fa fa-get-pocket fa-2x" aria-hidden="true"></i></li>
                    <li><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></li>
                </ul>    
            </div>
        );
    }
}

export default SocialShare;
