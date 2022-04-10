import React from 'react';
import { useState } from 'react';
import Like from '../pages/like.png'
import '../components/AddLike.css'

  export default function AddLike() {
    const [count, setCount] = useState(0);

    return (
      <div className='likes_container'>
        <button className='like_btn' onClick={() => setCount(count + 1)}>
        <img className='like_img' src={Like} alt="Logo"  width='22px'/>
        </button>
        <p>Total likes: {count}</p>
      </div>
    );
  }
  

  export {AddLike}