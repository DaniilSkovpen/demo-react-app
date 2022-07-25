import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { required } from '../../Utils/Validators';
import { createField, Input } from '../common/FormsControls/FormsControls';
import { LoginTh } from '../../Redux/auth-reducer'
import { Navigate } from 'react-router-dom';
import s from './../common/FormsControls/FormsControls.module.css'

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        {createField([required], "Enter Your Email...", "email", Input)}
        {createField([required], "Enter Your Password...", "password", Input, {type: 'password'})}
        {createField([], null, "rememberMe", Input, {type: 'checkbox'}, 'remember me')}
        {props.error && <div className={s.formSummaryError}>
            {props.error}
        </div>}
        <div>
            <button>Log in</button>
        </div>
    </form>
}



const Login = (props) => {
    const onSubmit = (FormData) => {
        props.LoginTh(FormData.email, FormData.password, FormData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate replace to={"/profile"} />
    }

    return <div>
        <h2>LOGIN</h2>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { LoginTh })(Login);