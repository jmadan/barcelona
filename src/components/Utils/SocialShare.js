import React from 'react';
import { Link } from 'react-router';

class SocialShare extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (<div>
            <div className="col-md-4 col-md-offset-5">
                <div className="bottom">
                    <a className="btn btn-primary btn-twitter btn-sm" href="https://twitter.com/">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a className="btn btn-danger btn-sm" rel="publisher"
                       href="https://plus.google.com/">
                        <i className="fa fa-google-plus"></i>
                    </a>
                    <a className="btn btn-primary btn-sm" rel="publisher"
                       href="https://plus.google.com/">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a className="btn btn-primary btn-sm" rel="publisher"
                       href="https://linkedin.com">
                        <i className="fa fa-linkedin"></i>
                    </a>
                </div>
            </div>
          </div>  
        );
    }
}

export default SocialShare;
