import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Ava_Rose_2009.jpg/683px-Ava_Rose_2009.jpg"/>
            {props.message}
            <div>
                <span>Like {props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;
