import React from 'react';
import { Link } from 'react-router';

class NavLink extends React.Component {
    render() {
        return (
            <Link to={this.props.href} activeClassName='active' onlyActiveOnIndex={true}>{this.props.text}</Link>
        );
    }
}

export default NavLink;
