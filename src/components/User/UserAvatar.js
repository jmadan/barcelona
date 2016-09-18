import React from 'react';

export default class UserAvatar extends React.Component{
	constructor(props){
		super(props)
	}

	render() {
		return (<div className="avatar">
                                <img alt="" src="http://lorempixel.com/100/100/people/9/" />
                            </div>);
	}
}