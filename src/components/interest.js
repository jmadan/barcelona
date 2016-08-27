import React from 'react';

class Interest extends React.Component {
    render() {
        return (
            <figure className="grid-figure">
        	<button className="btn btn-success btn-block" onClick={this.props.selectInterest.bind(null,this.props.topic)}>
        		<span className="fa fa-plus-circle"></span> {this.props.topic} 
        	</button>
        	</figure>
        );
    }
}

export default Interest;
