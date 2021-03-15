import React,{useState} from 'react';

import './blog-editor.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {Editor} from '@tinymce/tinymce-react';
import blog from '../../blog';

const BlogEditor =(props)=>{
    const [title, setTitle]=useState("");
    const [text, setText]=useState("");
    const handleEditorChange = (content, editor) => {
        setText(content);
      }
    const handleSubmit=(event)=> {
        
        event.preventDefault();
        console.log("Title:"+title);
        console.log("Text:"+text);

        //pops up little alert window (must press "OK" to continue)
        alert("Posted");
        //puts you on the blog page
        props.history.push('/blog');
      }

        
    return(
        <div className='blog-editor-page'>
            <form onSubmit={handleSubmit}>
                
                <FormInput 
                    name="title" 
                    type='text' 
                    value={title} 
                    handleChange={(event)=>{setTitle(event.target.value)}}
                    label='Title'
                    required
                />
                
                <Editor className='editor'
                    init={{selector: "textarea",
                    menubar: false,
                    plugins: "link image code",
                    toolbar: 'undo redo | styleselect | forecolor | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | link image | code'
                    
                }}
                    apikey={blog}
                    name='text'
                    onEditorChange={(content)=>{setText(content);}}
                    />
                
                
                <CustomButton type='submit'>Post</CustomButton>
            </form>
        </div>
    )
    
}

export default BlogEditor;