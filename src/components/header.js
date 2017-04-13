import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
//import * as actions from '../actions'; ONLY IF MY ACTION CREATOR IS IN INDEX.JS AND HAS THE SAME NAME AS MY REDUCER! IF NOT, USE...
import changeAuth from '../actions/changeAuth';

class Header extends Component {
	authButton(){
		return (
			<span>
			{this.props.authenticated ? 
				<button className='btn btn-primary' onClick={()=>this.props.changeAuth(false)}>Sign Out</button> : 
				<button className='btn btn-primary' onClick={()=>this.props.changeAuth(true)}>Sign In</button>}	
			</span>
		);

	}

	render(){
		return (
			<nav className='navbar navbar-light'>
				<ul className='nav navbar-nav'>
					<li className='nav-item'>
						<Link to='/'>Home</Link>
					</li>
					<li className='nav-item'>
						<Link to='/secret'>Secret Page</Link>
					</li>
					<li className='nav-item'>
						{this.authButton()}
					</li>
				</ul>
			</nav>
		);
	}
}

function mapStateToProps(state){
	return {
		authenticated: state.authenticated
	}
}

export default connect(mapStateToProps, {changeAuth})(Header);