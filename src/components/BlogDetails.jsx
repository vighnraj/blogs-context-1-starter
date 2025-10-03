import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='mt-[50px]'>
      <NavLink to={`/blog/${post.id}`}>
      <spam>{post.title}</spam>
      </NavLink>
      <p>
        By
        <span>{post.author}</span>
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
        <span>{post.category}</span> 
        </NavLink>
      </p>
      <p>Posted On {post.date}</p>
      <p>{post.content}</p>
      <div>
        {post.tags.map((tag, index) => (
            <NavLink to={`/tag/${tag.replaceAll(" ","-")}`} key={index}>
                <span>{`#$tag`}</span>
            </NavLink>
        ))}
      </div>
    </div>
  )
}

export default BlogDetails
