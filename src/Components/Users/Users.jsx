import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = (props) => {
   return <div>
    <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
     totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} /> 
        {
            props.users.map(u => <User key={u.id} 
                                  user={u}
                                  followingInProgress={props.followingInProgress}
                                  follow={props.follow}
                                  unFollow={props.unFollow}  />
                                  )
        }
    </div>
}

export default Users; 