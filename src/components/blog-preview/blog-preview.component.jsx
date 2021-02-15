import React from 'react';

import './blog-preview.styles.scss';

const BlogPreview=({id,title, author, time, text})=>(
    <div className='blog-preview'>
        <h1 className='title'>{title}</h1>
        <div className='author'>Written by {author}</div>
        <div className='time'>Posted on {time}</div>
        <span className='text'>{text}</span>
    </div>
)

export default BlogPreview;