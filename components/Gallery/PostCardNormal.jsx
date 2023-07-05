import React from 'react'
import Image from 'next/image'

const PostCardNormal = ({ fixedHeight, fixedWidth, postInfo,handleImageClick }) => {
  
    return (
        <div className='p-2 cursor-pointer' onClick={()=>handleImageClick(postInfo)}>
            <img
                style={{ height: fixedHeight, width: fixedWidth}}
                className="object-cover rounded-md"
                alt={`${postInfo.id}`}
                src={postInfo.src}
            ></img>
        </div>
    )
}

export default PostCardNormal