import { connect } from 'react-redux';
import React from 'react';
import Header from './Header';
import { LogoutTh } from '../../Redux/auth-reducer'

class HeaderContainer extends React.Component {
    render () {
        return <Header {...this.props}/>
    }
};

const mapStateToProps = (state) => ({

    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, { LogoutTh })(HeaderContainer);