import React from 'react';

export default class UserInfo extends React.Component{
	constructor(props){
		super(props)
	}

	render() {
		return (
			<div className="info">
                                <div className="title">
                                    <a href="http://scripteden.com/">Script Eden</a>
                                </div>
                                <div className="desc">Passionate designer</div>
                                <div className="desc">Curious developer</div>
                                <div className="desc">Tech geek</div>
                            </div>
			);
	}
}