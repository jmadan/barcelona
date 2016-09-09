import React from 'react';
import { Link } from 'react-router';

class NavLink extends React.Component {
    render() {
        return (
            <Link to={this.props.href} activeClassName='active' onlyActiveOnIndex={true}>
            <h1 className="article-title">{this.props.text}</h1>
            </Link>
        );
    }
}

export default NavLink;
