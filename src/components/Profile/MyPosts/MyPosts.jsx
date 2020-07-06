import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.content}>
            <div>
                my posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
                <div className={s.posts}>
                    <Post likesCount='6' message='Hi, how are you?'/>
                    <Post likesCount='4' message="It's my first post" />
                    <Post />
                    <Post />
                    <Post/>

                </div>
            </div>
        </div>
    );
}
export default MyPosts;
