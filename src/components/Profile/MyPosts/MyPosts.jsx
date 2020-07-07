import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <textarea></textarea>
                    <div>
                        <button>Add post</button>
                        <button>Remove</button>
                    </div>
                </div>
                <div className={s.posts}>
                    <Post likesCount='6' message='Hi, how are you?'/>
                    <Post likesCount='4' message="It's my first post"/>
                    <Post/>
                    <Post/>
                    <Post/>

                </div>
            </div>
        </div>
    );
}
export default MyPosts;
