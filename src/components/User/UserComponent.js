import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import SocialShare from '../Utils/SocialShare';

class UserComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <div className="card hovercard">
                            <div className="cardheader">
                                
                            </div>
                            <div className="avatar">
                                <img alt="" src="http://lorempixel.com/100/100/people/9/" />
                            </div>
                            <div className="info">
                                <div className="title">
                                    <a href="http://scripteden.com/">Script Eden</a>
                                </div>
                                <div className="desc">Passionate designer</div>
                                <div className="desc">Curious developer</div>
                                <div className="desc">Tech geek</div>
                            </div>
                            <SocialShare />
                        </div>

                    </div>
                </div>
            </div>
         </div>
        );
    }
}

export default UserComponent;
