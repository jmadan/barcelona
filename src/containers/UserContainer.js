import React from 'react';
import UserComponent from '../components/User/UserComponent';

class UserContainer extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
            <UserComponent {...this.props}/>
        </div>
        );
    }
}

export default UserContainer;
