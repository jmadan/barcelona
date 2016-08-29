import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="container">
			<footer>
				<div className="pull-left">
					<p className="text-center">Copyright-2016 - @Manhattan</p>
				</div>
				<div className="pull-right">
				<span>
					<i className="fa fa-twitter-square" aria-hidden="true"></i> 
					<i className="fa fa-facebook-square" aria-hidden="true"></i>
					<i className="fa fa-linkedin-square" aria-hidden="true"></i>
				</span>
				</div>
			</footer>
			</div>
        );
    }
}

export default Footer;
