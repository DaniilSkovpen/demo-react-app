import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../Utils/Validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import s from './MyPosts.module.css'
import Post from './Post/Post';

let maxLengthPoint = maxLengthCreator(30);

const MyPosts = React.memo(props => {

    console.log('Rerender')
    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <div>
                <AddPostReduxForm onSubmit={onAddPost} />
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    );
}
)
const addPostForm = ({ handleSubmit }) => {

    return <form onSubmit={handleSubmit}>
        <div>
            <Field types="input" component={Textarea} name="newPostText" 
                placeholder='Enter your message...' validate={[required, maxLengthPoint]} />
        </div>
        <div>
            <button className={s.button}>Add Post</button>
        </div >
    </form>
}

const AddPostReduxForm = reduxForm({
    form: 'postAddForm',
})(addPostForm)

export default MyPosts;