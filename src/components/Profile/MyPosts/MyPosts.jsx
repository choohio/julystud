import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements =
        props.posts.map( p => <Post likesCount={p.likesCount} message={p.post}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText();
}

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                    <div>
                        <button onClick={ addPost }>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    { postsElements }
                    {/*<Post likesCount={postsData[0].likesCount} message={postsData[0].post}/>*/}
                </div>
            </div>
        </div>
    );
}
export default MyPosts;
