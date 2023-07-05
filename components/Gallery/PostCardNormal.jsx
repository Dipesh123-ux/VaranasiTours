import React from 'react'
import Image from 'next/image'

const PostCardNormal = ({ fixedHeight, fixedWidth, postInfo,handleImageClick }) => {
  
    return (
        <div className='p-2 cursor-pointer' onClick={()=>handleImageClick(postInfo)}>
            <Image
                style={{ height: fixedHeight, width: fixedWidth}}
                className="object-cover rounded-md"
                alt={`${postInfo.id}`}
                src={postInfo.src}
                height={500}
                width={500}
            ></Image>
        </div>
    )
}

export default PostCardNormal