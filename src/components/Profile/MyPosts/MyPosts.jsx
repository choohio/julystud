import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, post: 'Hi, how are you?', likesCount: 12},
        {id: 2, post: "It's my first post", likesCount: 13},
        {id: 3, post: "Blabla", likesCount: 22},
        {id: 4, post: "yeah", likesCount: 17},
    ]

    let postsElements = posts.map( p => <Post likesCount={p.likesCount} message={p.post}/>);

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
                    { postsElements }
                    {/*<Post likesCount={postsData[0].likesCount} message={postsData[0].post}/>*/}
                </div>
            </div>
        </div>
    );
}
export default MyPosts;
