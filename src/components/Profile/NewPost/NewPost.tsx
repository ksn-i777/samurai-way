import React from "react";
import s from "./NewPost.module.css";
import {newPostActionCreater, newWordActionCreater} from '../../../redux/store';


function NewPost(props: any) {
    let ref = React.createRef<HTMLTextAreaElement>();

    let newPost = () => {
        if (ref.current?.value !== (null || '')) {
            props.dispatch (newPostActionCreater()); 
        }        
    }

    let newWord = () => {
        let newText = ref.current?.value;
        props.dispatch (newWordActionCreater(newText));
    }

    
    return (
        <div className={s.new}>
            <textarea value={props.newPostText} onChange={ newWord } ref={ref} className={s.input} placeholder={'Enter a message'} />
            <button onClick={ newPost } className={s.button}>Add post</button>
        </div>

    )
}

export default NewPost;
