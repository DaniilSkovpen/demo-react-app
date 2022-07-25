import React from "react";
import { Navigate, useMatch } from "react-router-dom";
import { connect } from 'react-redux';

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withRouter = (Component) => {
    let RouterComponent = (props) => {
        const match = useMatch('/profile/:userId/');
        return <Component {...props} match={match} />;
    }
    return RouterComponent;
}

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to={'/login'} />
            return <Component {...this.props} />
        }
    }
    
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent;
}