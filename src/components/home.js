import React from 'react';
import {
    Link
} from 'react-router';

export default class Home extends React.Component {
    render() {
        return (
            <div><div className="well text-center">
        	<h1>Welcome to Manhattan</h1>
        	<p>We don't have the feed ready for you yet.</p>
        	<p>Please check back later</p>
        	</div>
        	<div className="row">
        	<div className="col-lg-3 col-md-2"></div>
        	<div className="col-lg-6 col-md-8">
        	<form className="form-horizontal">
        		<div className="form-group">
        		<div className="input-group"> 
        			<span className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span></span>
        			<input type="text" className="form-control" name="email-invite" placeholder="Request beta invite" /> 
        		</div>
        		</div>	
        		<button name="submit" id="submit" className="btn btn-primary pull-centre" type="submit">Submit</button>
        	</form>
        	</div>
        	<div className="col-lg-3 col-md-2"></div>
        	</div>
        	</div>
        );
    }
}
