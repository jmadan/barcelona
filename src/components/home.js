import React from 'react';
import {
    Link
} from 'react-router';

export default class Home extends React.Component {

    render() {
        return (
            <div>
            <div className="well text-center">
        	<h1>Welcome to Barcelona</h1>
        	<p>We don't have the feed ready for you yet.</p>
        	<p>Please check back later</p>
        	</div>
        	<div className="row">
        	<div className="col-lg-3 col-md-2"></div>
        	<div className="col-lg-6 col-md-8">
        	<form>
        		<div className="form-group">
        			<input type="text" className="form-control" name="email-invite" placeholder="Request beta invite" />
        		</div>
                <div className="col-md-4 col-md-offset-4">
                    <button name="submit" id="submit" className="btn btn-block btn-primary" type="submit">Submit</button>
                </div>
        	</form>
        	</div>
        	<div className="col-lg-3 col-md-2"></div>
        	</div>
        	</div>
        );
    }
}
