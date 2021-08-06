import React from 'react';

import style from './Post.module.css';

const Post = (props) => {
   return (
      <>
         <div className={style.postWrapper}>
            <img className={style.ava} src="https://oir.mobi/uploads/posts/2020-01/1578320833_3-3.png" alt="" />
            <p className={style.postMessage}>{props.message}</p>
            <span>{props.likes} <img src="http://cdn.onlinewebfonts.com/svg/img_86166.png" alt="Likes" width={20} /></span>
         </div>
      </>
   )
}

export default Post;