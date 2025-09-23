import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import './Blogs.css'
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
      {postsArray.map((item) => (
        <div key={item.id}>
          <img src={item.img} alt={item.title} />
          <p className='font-bold text-sm'>{item.title}</p>
          <p className='text-[13px] mt-[4px]'>
            By <span className='italic'>{item.author}</span> on <span className='underline font-bold'>{item.category}</span>
          </p>
          <p className='text-[10px] mt-[4px]'>Posted on {item.date}</p>
          <p className='text-[10px] mt-[14px]'>{item.content}</p>
          <div className='flex gap-x-1'>
            {item.tags?.map((tag, index) => (
              <span className='text-blue-700 underline font-bold text-[12px] mt-[5px]' key={index}>{`#${tag}`}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
