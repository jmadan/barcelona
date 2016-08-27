import React from 'react';
import Interest from './interest';

class InterestGrid extends React.Component {
    SaveInterest() {
        console.log("Hello from the button");
    }

    render() {
        return (
            <div className="container">
	        	<div className="row">
	        	<header><h1 className="page-header">Select the topics you are interested in</h1></header>
	        	<form onSubmit={this.SaveInterest}>
	        		<div className="interest-grid">
	        		{this.props.interestList.map((interest, i) => <Interest {...this.props} key={i} i={i} topic={interest} />)}
	        		</div>
	        		<button name="submit" id="submit" className="btn-lg btn-primary pull-centre" type="submit">Save Interests</button>
	        	</form>	
	        	</div>
			</div>
        );
    }
}

export default InterestGrid;
