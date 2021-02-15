import React from 'react';

import './blog-editor.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import FormArea from '../../components/form-input/form-area.component';
import CustomButton from '../../components/custom-button/custom-button.component';
class BlogEditor extends React.Component{
    constructor(props){
        super(props);

        this.state={
            title:"",
            text:""

        }
    }
    handleChange=event =>{
        const {value,name} = event.target;

        this.setState({[name]:value})
    }

    handleSubmit=(event)=> {
        console.log(this.state);

        event.preventDefault();
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
                    
                    
                    <FormArea
                        name="text" 
                        type='area' 
                        value={this.state.text} 
                        handleChange={this.handleChange} 
                        label='Text'
                        required
                    />

                    <CustomButton type='submit'>Post</CustomButton>
                </form>
            </div>
        )
    }
}

export default BlogEditor;