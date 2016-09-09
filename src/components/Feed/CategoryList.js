import React from 'react';
import { Link } from 'react-router';

class CategoryList extends React.Component {

    render() {
        return (
            <li>#{this.props.tags ? this.props.tags : 'No tags'}</li>
        );
    }
}

export default CategoryList;
