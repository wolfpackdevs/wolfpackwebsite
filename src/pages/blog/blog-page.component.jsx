import React, {useState} from 'react';
import BlogPreview from './../../components/blog-preview/blog-preview.component';
import BLOG_DATA from './../../blog.data.jsx';
import './blog-page.styles.scss';

const BlogPage =()=>{
    const [blogList, setBlogList]=useState(BLOG_DATA);
    return(
        <div className='blog-page'>
            {
                blogList.map(({id, ...otherBlogProps})=>(
                    <BlogPreview key={id}{...otherBlogProps} />
                ))
            }
        </div>
    );
}
// class BlogPage extends React.Component{
//     constructor(props){
//         super(props);

//         this.state={
//             blogList:BLOG_DATA
//         }
//     }

//     render(){
//         const {blogList}=this.state;

//         return(
//             <div className='blog-page'>
//                 {
//                     blogList.map(({id, ...otherBlogProps})=>(
//                         <BlogPreview key={id}{...otherBlogProps} />
//                     ))
//                 }
//             </div>
//         );
//     }
// }

export default BlogPage;