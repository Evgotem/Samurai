import React from 'react';
import style from './MyPosts.module.css';

import Post from './Post/Post';

const MyPosts = () => {

   return (
      <>
         <div>
            My posts
         </div>
         
         <Post message='Hi, how are you?' likesCount={1} />
         <Post message='Ez' likesCount={2} />
         <Post message='Breeze' likesCount={3} />
      </>
   )
}

export default MyPosts;