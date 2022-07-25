import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
   return <header className={classes.header}>
      <img src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/05/attachment_82928010-e1494006898649.jpg?auto=format&q=60&fit=max&w=930' />
      <div className={classes.loginBlock}>
         {props.isAuth
            ? <div>{props.login} - <button className={classes.button} onClick={props.LogoutTh}>Log out</button></div>
            : <NavLink to={'/login'}>Login</NavLink>}

      </div>
   </header>
}

export default Header;