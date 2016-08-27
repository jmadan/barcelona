import React from 'react';

import NavBar from './nav';
import Footer from './footer';

export default class Main extends React.Component {
    render() {
        return (
            <div>
				<NavBar /> 
				<div className = "container">
					<div className="row">
						{React.cloneElement(this.props.children, this.props)}
					</div> 
				</div>
				<br />
				<Footer />
			</div>
        );
    }
}
