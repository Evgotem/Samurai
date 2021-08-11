import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';
import style from './MyPosts.module.scss';

import Post from './Post/Post';


const MyPosts = (props) => {

   let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

   let newPostElement = React.createRef();

   let onPostChange = () => {
      let text = newPostElement.current.value;
      // props.updateNewPostText(text);
      // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
      let action = updateNewPostTextActionCreator(text);
      props.dispatch(action);
   }

   let addPost = () => {
      // props.addPost();
      props.dispatch(addPostActionCreator());
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