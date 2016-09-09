import React from 'react';
import SocialShare from './Utils/SocialShare';

class Footer extends React.Component {
    render() {
        return (
            <div className="container">
			<footer>
				<div className="text-center">
					<p className="text-center">Copyright-2016 - @Manhattan</p>
					<SocialShare />
				</div>
			</footer>
			</div>
        );
    }
}

export default Footer;
