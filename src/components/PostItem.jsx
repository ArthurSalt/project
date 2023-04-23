import React from "react";
import MyButton from "./UI/button/MyButton";


const PostItem = (props) => {



   return (

      <div className='post'>
         <div className="post__content">
            <h1>{props.post.id}. {props.post.title}</h1>
            <p>{props.post.body}</p>
         </div>
         <div className="post__btns">
            <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
         </div>
      </div>

   );
};

export default PostItem;