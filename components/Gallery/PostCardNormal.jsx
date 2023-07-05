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
                height={800}
                width={800}
            ></Image>
        </div>
    )
}

export default PostCardNormal