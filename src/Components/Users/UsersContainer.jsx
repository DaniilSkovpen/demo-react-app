import { Follow, unFollow, setCurrentPage, toggleFollowingProgress, getUsers } from "../../Redux/users-reducer";
import { connect } from 'react-redux';
import Users from "./Users";
import React from 'react';
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";
import { getUsersSuper, getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUserAuth} from "../../Redux/users-selectors";


class UsersContainer extends React.Component {
  /**
   * When the component is mounted, call the getUsers function, which is passed in as a prop, and pass
   * it the currentPage and pageSize props.
   */
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
        }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.Follow}
            unFollow={this.props.unFollow}
            followingInProgress={this.props.followingInProgress} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getUserAuth(state)
    }; 
}

export default compose(
    connect(mapStateToProps,
        { Follow, unFollow, setCurrentPage, toggleFollowingProgress, getUsers }),
    withAuthRedirect
)(UsersContainer);