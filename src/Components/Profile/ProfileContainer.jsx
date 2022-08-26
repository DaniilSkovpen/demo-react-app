import { useParams } from 'react-router-dom'
import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { UserProfile, UserStatus, UpdateUserStatus } from '../../Redux/profile-reducer'
import { compose } from 'redux';

function withRouter(Children) {
    return (props) => {

        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = this.props.authorizedUserId;
       
    }
        this.props.UserProfile(userID)
        this.props.UserStatus(userID)
    }

   render(){
       
    return (
        <div>
            
            <Profile {...this.props} 
            updateStatus={this.props.UpdateUserStatus} 
            status={this.props.status} 
            profile={this.props.profile} />
        </div>
        
    );
}
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userID,
    isAuth: state.auth.isAuth 
})

export default compose(
    connect(mapStateToProps, { UserProfile, UserStatus, UpdateUserStatus }),  
    withRouter)
    (ProfileContainer);