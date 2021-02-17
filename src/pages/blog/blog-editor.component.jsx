import React from 'react';

import './blog-editor.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {Editor} from '@tinymce/tinymce-react';
class BlogEditor extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            title:"",
            text:""
        }
        
    }
    handleChange=(event) =>{
        const {value,name} = event.target;

        this.setState({[name]:value})
        
    }
    handleEditorChange = (content, editor) => {
        this.setState({text:content});
      }
    handleSubmit=(event)=> {
        alert("Posted");
        
        console.log(this.state);
        
        event.preventDefault();
        this.props.history.push('/blog');
      }

    render(){
        
        return(
            <div className='blog-editor-page'>
                <form onSubmit={this.handleSubmit}>
                    
                    <FormInput 
                        name="title" 
                        type='text' 
                        value={this.state.title} 
                        handleChange={this.handleChange} 
                        label='Title'
                        required
                    />
                    
                    <Editor className='editor'
                        init={{selector: "textarea",
                        menubar: false,
                        plugins: "link image code",
                        toolbar: 'undo redo | styleselect | forecolor | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | link image | code'
                        
                    }}
                        apikey="czamjs9g3wawuwcyglksvzgmayz964dxwjuy1tmpe8ibry6p"
                        name='text'
                        onEditorChange={this.handleEditorChange}
                        />
                    
                    
                    <CustomButton type='submit'>Post</CustomButton>
                </form>
            </div>
        )
    }
}

export default BlogEditor;