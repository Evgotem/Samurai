import React from 'react';
import style from './MyPosts.module.css';

import Post from './Post/Post';

const MyPosts = () => {

   return (
      <>
         <div>
            My posts
         </div>
         
         <Post message='Hi, how are you?' likes={1} />
         <Post message='Ez' likes={2} />
         <Post message='Breeze' likes={3} />
      </>
   )
}

export default MyPosts;