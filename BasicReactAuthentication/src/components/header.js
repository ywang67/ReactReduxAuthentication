import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import { authenticate } from '../actions/index'


class Header extends Component{


    autheButton(){
        if(this.props.authenticated){
            return <button onClick={()=> this.props.authenticate(false)}>Sign Out</button>
        }

        return <button onClick={()=>this.props.authenticate(true)}>Sign in</button>
    }

    handleClick(){

    }

    render(){
        return(
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resources">Resources</Link>
                    </li>
                    <li className="nav-item">
                        {this.autheButton()}
                    </li>
                </ul>
            </nav>
        )
    }
}


function mapStateToProps(state) {
    /*console.log(state);*/
    return {
        authenticated: state.authenticated
    }
}
export default connect(mapStateToProps,actions)(Header);

/*
function mapDispatchToProps(dispatch) {
    return bindActionCreators({authenticate: authenticate}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);


*/
