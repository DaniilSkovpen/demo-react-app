import s from './Users.module.css';
import imageProfile from '../../pictures/dante.png';
import { NavLink } from 'react-router-dom';
import React from 'react';

let User = ({ user, followingInProgress, follow, unFollow }) => {
    return <div>
        <span>
            <div className={s.userPhoto}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : imageProfile} />
                </NavLink>
            </div>
            <div>
                {user.followed ? <button disabled={followingInProgress.some(id => id === user.id)} className={s.button} onClick={() => {
                    unFollow(user.id)
                }}>UnFollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)} className={s.button} onClick={() => {
                        follow(user.id)
                    }}>Follow</button>}

            </div>
        </span>
        <span>
            <span>
                <div>
                    {user.name}
                </div>
                <div>
                    {user.status}
                </div>
            </span>
            <span>
                <div>
                    {'u.location.country'}
                </div>
                <div>
                    {'u.location.city'}
                </div>
            </span>
        </span>
    </div >
}

export default User; 