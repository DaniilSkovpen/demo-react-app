import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} updateStatus={props.updateStatus}
                status={props.status} />
            <MyPostsContainer />
        </div>
        
    );
}

export default Profile;