import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {
    render() {
        return (
            <div className="container-fluid">
				    <nav className="navbar navbar-inverse">
				      <div className="container">
				        <div className="navbar-header">
				          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-4">
				            <span className="sr-only">Toggle navigation</span>
				            <span className="icon-bar"></span>
				            <span className="icon-bar"></span>
				            <span className="icon-bar"></span>
				          </button>
				          <Link to="/" className="navbar-brand">Barcelona</Link>
				        </div>
				        <div className="collapse navbar-collapse" id="navbar-collapse-4">
				          <ul className="nav navbar-nav navbar-right">
				            <li><Link to="/">Home</Link></li>
				            <li><Link to="/latest">Latest</Link></li>
				          </ul>
				        </div>
				      </div>
				    </nav>
				</div>
        );
    }
}
export default NavBar;
