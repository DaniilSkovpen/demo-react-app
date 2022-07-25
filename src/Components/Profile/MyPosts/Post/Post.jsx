import s from './Post.module.css'

const Post = (props) => {
    return (
            <div className={s.item}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUFXWE8uv_KLOkzGtg6OcggAkpa0o4xYgu4Q&usqp=CAU' />
                {props.message}
                <div>
                <span>Like {props.likesCount}</span> 
                </div>
            </div>
    );
}

export default Post;  