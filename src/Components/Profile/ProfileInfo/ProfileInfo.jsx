import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import imageProfile from '../../../pictures/dante.png';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return (
      
        <div className={s.userPhoto}>
        <div>
            {/*<img src='https://imgd.aeplcdn.com/1056x594/n/cw/ec/40087/thar-exterior-right-front-three-quarter-11.jpeg?q=75&wm=1' />*/}
        </div>
        <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : imageProfile} />
                <div> {props.profile.fullName}</div>
                <div><ProfileStatusWithHooks updateStatus={props.updateStatus}
                    status={props.status} /></div>

            </div>
        </div>);
}

export default ProfileInfo;