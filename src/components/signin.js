import React from 'react';

class SignIn extends React.Component {
    render() {
        return (
            <div>
			<form>
        		<div className="form-group">
        		<div className="input-group"> 
        			<input type="text" className="form-control" ref="useremail" name="useremail" placeholder="Email" /> 
        		</div>
        		<div className="input-group"> 
        			<input type="password" className="form-control" ref="userpass" name="userpass" placeholder="***********" /> 
        		</div>
        		</div>	
        		<button name="submit" id="submit" className="btn btn-primary pull-centre" type="submit">Sign In</button>
        	</form>
		</div>
        );
    }
}


export default SignIn;
