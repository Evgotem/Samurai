import React from 'react';
import style from './MyPosts.module.scss';

import Post from './Post/Post';

const MyPosts = (props) => {


    let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea />
            </div>
            <div>
                <button>Add post</button>
            </div>

            {postsElements}
        </>
    )
}

export default MyPosts;