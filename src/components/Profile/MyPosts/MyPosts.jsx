import React from 'react';
import style from './MyPosts.module.scss';

import Post from './Post/Post';

const MyPosts = (props) => {

   let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

   let newPostElement = React.createRef();

   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
   }

   let addPost = () => {
      props.addPost();
   }


   return (
      <>
         <div>
            <h3>My posts</h3>
         </div>
         <div>
            <textarea
               ref={newPostElement}
               onChange={onPostChange}
               value={props.newPostText} />
         </div>
         <div>
            <button onClick={addPost} >Add post</button>
         </div>

         {postsElements}
      </>
   )
}

export default MyPosts;