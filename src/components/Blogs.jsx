import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import './Blogs.css'
import BlogDetails from './BlogDetails';
const Blogs = () => {
  const { loading, posts } = useContext(AppContext);

  console.log("Printing inside blogs component", posts);

  // Agar post object available hai to posts nikaalo
  const postsArray = posts

  if (loading) {
    return <Spinner />;
  }

  if (!posts) {
    return <p>Loading data failed or no response.</p>;
  }

  if (postsArray.length === 0) {
    return <p>No posts found</p>;
  }

  return (
    <div className='w-11/12 max-w-[530px] flex flex-col gap-5 mx-auto py-7 mt-[65px] mb-[65px]'>
      {
      postsArray.map((post) => (
       <BlogDetails key={post.id} post={post} />
      ))
      }
    </div>
  );
};

export default Blogs;
