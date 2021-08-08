import React from 'react';
import style from './MyPosts.module.scss';

import Post from './Post/Post';

const MyPosts = () => {

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

         <Post message='Hi, how are you?' likesCount={1} />
         <Post message='Ez' likesCount={2} />
         <Post message='Breeze' likesCount={3} />
      </>
   )
}

export default MyPosts;